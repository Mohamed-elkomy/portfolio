// =========================================================================
// Capture desktop + mobile screenshots of every project's live site.
//
// Usage:  npm run screenshots
//
// - Reads the project list (slug + links.live) from src/data/projects.js
// - Opens each URL in Chromium and saves:
//     public/projects/{slug}.jpg          (desktop, 1440x900)
//     public/projects/{slug}-mobile.jpg   (mobile,  375x812)
// - Idempotent: skips a project when BOTH files already exist, so it's
//   safe to re-run after adding new projects.
// - Runs sequentially to be polite to small Vercel deployments.
// - One failing site never crashes the run — it's logged and skipped.
// =========================================================================

import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { existsSync, mkdirSync } from 'node:fs'

import { projects } from '../src/data/projects.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'projects')

const DESKTOP = { width: 1440, height: 900 }
const MOBILE = { width: 375, height: 812 }
const PAGE_TIMEOUT = 60_000 // hard navigation/idle ceiling per page
const IDLE_TIMEOUT = 5_000 // best-effort wait for network to settle

// Best-effort "page is settled" wait: try networkidle, fall back to a short
// fixed delay so animated/long-polling sites don't hang the whole timeout.
async function waitForSettled(page) {
  try {
    await page.waitForLoadState('networkidle', { timeout: IDLE_TIMEOUT })
  } catch {
    await page.waitForTimeout(IDLE_TIMEOUT)
  }
}

async function capture(context, url, viewport, outPath) {
  const page = await context.newPage()
  try {
    await page.setViewportSize(viewport)
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: PAGE_TIMEOUT })
    await waitForSettled(page)
    await page.screenshot({ path: outPath, type: 'jpeg', quality: 85 })
  } finally {
    await page.close()
  }
}

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

  const targets = projects.filter((p) => p?.links?.live)
  const started = Date.now()

  const captured = []
  const skipped = []
  const failed = []

  const browser = await chromium.launch()
  const context = await browser.newContext({
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  })

  console.log(`\nCapturing ${targets.length} project(s) → ${OUT_DIR}\n`)

  for (const project of targets) {
    const { slug } = project
    const url = project.links.live
    const desktopPath = join(OUT_DIR, `${slug}.jpg`)
    const mobilePath = join(OUT_DIR, `${slug}-mobile.jpg`)

    if (existsSync(desktopPath) && existsSync(mobilePath)) {
      console.log(`  ↷ skipped  ${slug} (already captured)`)
      skipped.push(slug)
      continue
    }

    try {
      await capture(context, url, DESKTOP, desktopPath)
      await capture(context, url, MOBILE, mobilePath)
      console.log(`  ✓ captured ${slug}  (${url})`)
      captured.push(slug)
    } catch (err) {
      console.warn(`  ⚠ failed   ${slug}  (${url}) — ${err.message}`)
      failed.push(slug)
    }
  }

  await context.close()
  await browser.close()

  const elapsed = ((Date.now() - started) / 1000).toFixed(1)
  console.log('\n────────────────────────────────────────')
  console.log(`  captured: ${captured.length}`)
  console.log(`  skipped:  ${skipped.length}`)
  console.log(`  failed:   ${failed.length}${failed.length ? ` → ${failed.join(', ')}` : ''}`)
  console.log(`  time:     ${elapsed}s`)
  console.log('────────────────────────────────────────\n')

  // Non-zero exit if everything failed, so CI/manual runs notice.
  if (captured.length === 0 && failed.length > 0) process.exit(1)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
