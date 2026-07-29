import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProtectionToast from '@/components/common/ProtectionToast'
import CustomCursor from '@/components/common/CustomCursor'
import ScrollProgress from '@/components/common/ScrollProgress'

const Home = lazy(() => import('@/pages/Home'))
const Work = lazy(() => import('@/pages/Projects'))
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const CertificationsPage = lazy(() => import('@/pages/CertificationsPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFound = lazy(() => import('@/pages/NotFound'))

import { useContentProtection } from '@/hooks/useContentProtection'

/** Loading fallback for dynamic route chunks */
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brass-500 border-t-transparent" />
    </div>
  )
}

/** Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/** Shared layout — Navbar + AnimatePresence-wrapped routes + Footer */
function Layout() {
  const { toast, dismiss } = useContentProtection()
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait" initial={false}>
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <ProtectionToast toast={toast} onDismiss={dismiss} />
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            {/* Legacy routes — redirect-friendly */}
            <Route path="/projects" element={<Work />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
