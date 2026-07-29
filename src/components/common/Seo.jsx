import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://portfolio-komys-projects.vercel.app'
const OG_IMAGE = `${SITE_URL}/og-image.png`

/**
 * Centralized <head> manager — title, description, and Open Graph + Twitter
 * Card tags so the portfolio previews cleanly on LinkedIn / Twitter / WhatsApp.
 * All pages share one og:image (/public/og-image.png, 1200×630).
 */
export default function Seo({ title, description, path = '/', image }) {
  const url = `${SITE_URL}${path}`
  const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : OG_IMAGE

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
