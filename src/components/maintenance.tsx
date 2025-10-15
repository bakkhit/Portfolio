"use client"
import { useEffect, useState } from "react"

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
    } catch (e) {
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

    // cursor halo
    const [cursor, setCursor] = useState({ x: -9999, y: -9999 })

    useEffect(() => {
      if (typeof window === 'undefined') return
      const onMove = (e: PointerEvent) => {
        setCursor({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('pointermove', onMove)
      return () => window.removeEventListener('pointermove', onMove)
    }, [])

  if (!show) return null

  // set CSS variables on the root element so the ::before mask can use them
  const rootStyle: React.CSSProperties = ({ ['--cx' as any]: `${cursor.x}px`, ['--cy' as any]: `${cursor.y}px` })

  return (
    <div className="maintenance-root" style={rootStyle}>
      <div className={`maintenance-card ${exiting ? 'maintenance-exit' : 'maintenance-animate-in'}`}>
        <h1 className="maintenance-title">EN MAINTENANCE</h1>
        <p className="maintenance-text">Je travaille sur une refonte du site. Revenez bientôt.</p>
        <div className="maintenance-actions">
          <button className="maintenance-enter maintenance-pulse" onClick={enter}>
            Entrer quand même
          </button>
        </div>
      </div>
    </div>
  )
}
