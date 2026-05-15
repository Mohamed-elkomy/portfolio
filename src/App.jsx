import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Lenis from 'lenis'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProtectionToast from '@/components/common/ProtectionToast'

import Home from '@/pages/Home'
import ProjectsGallery from '@/pages/Projects'
import ProjectDetail from '@/pages/ProjectDetail'
import Photography from '@/pages/Photography'
import AboutPage from '@/pages/AboutPage'
import CertificationsPage from '@/pages/CertificationsPage'
import ContactPage from '@/pages/ContactPage'
import NotFound from '@/pages/NotFound'

import { useContentProtection } from '@/hooks/useContentProtection'

/** Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/** Shared layout — Navbar + content + Footer + global protection toast */
function Layout() {
  const { toast, dismiss } = useContentProtection()
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ProtectionToast toast={toast} onDismiss={dismiss} />
    </div>
  )
}

export default function App() {
  // Initialize Lenis smooth scroll once, respecting prefers-reduced-motion
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
            <Route path="/projects" element={<ProjectsGallery />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
