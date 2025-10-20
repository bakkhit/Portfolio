"use client"
import { useEffect, useState, useRef } from "react"

export default function Maintenance() {
  const [show, setShow] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // No persistence: always show on page load (will reappear after refresh).
    // Keep this effect present for future URL-based overrides if needed.
    try {
      const params = new URLSearchParams(window.location.search)
      const forceHide = params.get('maintenance') === '0'
      if (forceHide) setShow(false)
    } catch {
      // ignore (SSR safe)
    }
  }, [])

  const enter = () => {
    // play exit animation then hide (no persistence)
    setExiting(true)
    setTimeout(() => setShow(false), 420)
  }

  // prevent background scrolling while maintenance overlay is visible
    useEffect(() => {
      if (typeof window === 'undefined') return
      const body = document.body
      if (show) {
        body.classList.add('maintenance-active')
      } else {
        body.classList.remove('maintenance-active')
      }

      return () => body.classList.remove('maintenance-active')
    }, [show])

    // cursor halo: update CSS variables on the root div using a ref (avoids any typing)
    const rootRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      if (typeof window === 'undefined') return
      const onMove = (e: PointerEvent) => {
        const el = rootRef.current
        if (el) {
          el.style.setProperty('--cx', `${e.clientX}px`)
          el.style.setProperty('--cy', `${e.clientY}px`)
        }
      }
      window.addEventListener('pointermove', onMove)
      return () => window.removeEventListener('pointermove', onMove)
    }, [])

  if (!show) return null

  return (
    <div ref={rootRef} className="maintenance-root">
      <div className={`maintenance-card ${exiting ? 'maintenance-exit' : 'maintenance-animate-in'}`}>
        <h1 className="maintenance-title">EN TRAVAUX</h1>
        <p className="maintenance-text">🚧Je travaille sur une refonte du site. Revenez bientôt.🚧</p>
        <div className="maintenance-actions">
          <button className="maintenance-enter maintenance-pulse" onClick={enter}>
            Entrer quand même
          </button>
        </div>
      </div>
    </div>
  )
}
