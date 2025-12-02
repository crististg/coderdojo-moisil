import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'

// Floating header component — I hand-implemented the accessible mobile menu.
// Notes: keeps behavior simple and keyboard-friendly. — Cristi, Dec 2025
export default function Header() {
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // When menu opens, move focus to first link for keyboard users.
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        const el = document.querySelector<HTMLAnchorElement>('.mobile-link')
        el?.focus()
      }, 50)
    }
  }, [open])

  // Close dropdown when clicking/tapping outside of it (or the button).
  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent | TouchEvent) {
      const target = e.target as Node
      if (menuRef.current && btnRef.current && !menuRef.current.contains(target) && !btnRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('touchstart', onDown)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('touchstart', onDown)
    }
  }, [open])

  return (
  // Floating, centered header bar that sits on top of the hero.
  // It will be positioned absolutely inside the page wrapper so it visually
  // overlays the hero but still scrolls away with the page.
  <header style={{ position: 'fixed', left: 0, right: 0, top: 24, zIndex: 60, pointerEvents: 'auto' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.96)',
            borderRadius: 9999,
            boxShadow: '0 18px 50px rgba(11,11,11,0.12)',
            padding: '10px 18px',
            border: '1px solid rgba(11,11,11,0.06)'
          }}
        >
          <Link href="/" className="brand-link" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
            <img
              src="/logo.png"
              alt="CoderDojo Moisil logo"
              style={{ height: 56, width: 56, borderRadius: 12, background: 'transparent', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, lineHeight: 1 }}>{'CoderDojo Timișoara @Moisil'}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>playful coding club</div>
            </div>
          </Link>

          {/* Desktop nav - unchanged, hidden on small screens via CSS below */}
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Link href="/about" className="nav-link" style={{ color: '#111827', textDecoration: 'none', fontSize: 14 }}>About</Link>
            <Link href="/events" className="nav-link" style={{ color: '#111827', textDecoration: 'none', fontSize: 14 }}>Events</Link>
            <Link href="/login" className="nav-link" style={{ color: '#111827', textDecoration: 'none', fontSize: 14 }}>Login</Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_z9we6b-Rm_bYf4N8_BSKC7x2BvhwmZZ4tbq3QdrRjqK85w/viewform?usp=dialog"
              className="btn header-cta"
              style={{ fontSize: 14 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join us
            </a>
          </nav>

          {/* Mobile burger button - visible only on small viewports */}
          <button
          ref={btnRef}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={open ? 'burger-btn open' : 'burger-btn'}
            onClick={() => setOpen(v => !v)}
            type="button"
            style={{ background: 'transparent', border: 'none', padding: 0, marginLeft: 8 }}
          >
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </button>
        </div>
      </div>

      {/* Mobile menu + backdrop (rendered when open). Kept separate from desktop nav so desktop remains unchanged. */}
      {open && (
        <div id="mobile-menu" ref={menuRef} className="mobile-menu" role="menu">
          <nav aria-label="Mobile navigation" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Link href="/about" className="mobile-link" onClick={() => setOpen(false)}>About</Link>
            <Link href="/events" className="mobile-link" onClick={() => setOpen(false)}>Events</Link>
              <Link href="/login" className="mobile-link" onClick={() => setOpen(false)}>Login</Link>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_z9we6b-Rm_bYf4N8_BSKC7x2BvhwmZZ4tbq3QdrRjqK85w/viewform?usp=dialog"
              className="mobile-cta"
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join us
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        .burger-btn{ display:none; align-items:center; justify-content:center; width:48px; height:48px; border-radius:12px; cursor:pointer; transition: background 160ms ease }
        .burger-btn:hover{ background: rgba(11,11,11,0.04) }
        .burger-btn:focus{ outline: none; box-shadow: 0 0 0 6px rgba(0,0,0,0.06); }
        .burger-btn .line{ display:block; width:20px; height:2px; background:#111827; margin:3px 0; border-radius:2px; transition: transform 200ms cubic-bezier(.2,.9,.25,1), opacity 160ms ease }
        .burger-btn.open .line1{ transform: translateY(6px) rotate(45deg) }
        .burger-btn.open .line2{ opacity: 0 }
        .burger-btn.open .line3{ transform: translateY(-6px) rotate(-45deg) }

  /* Mobile dropdown (anchored to the button) */
  .mobile-menu{ position:absolute; right:18px; top:64px; z-index:66; background: #fff; border-radius:8px; padding:8px; box-shadow: 0 8px 20px rgba(11,11,11,0.06); border:1px solid rgba(11,11,11,0.04); min-width:140px }

  .mobile-link{ display:block; text-decoration:none; color: #111827; font-weight:700; font-size:1rem; padding:8px 10px; border-radius:6px; text-align:left }
  .mobile-link + .mobile-link{ margin-top:2px }
  .mobile-link:focus{ outline:none; box-shadow: 0 0 0 3px rgba(0,0,0,0.06); }

  .mobile-cta{ display:block; width:100%; text-align:center; margin-top:6px; padding:8px 10px; border-radius:8px; background: var(--cd-orange, #ff7a2a); color: #fff; font-weight:800; text-decoration:none }
  .mobile-cta:active{ transform: translateY(1px) }

        /* Hide desktop nav on small screens and show burger */
        @media (max-width:900px){
          nav[aria-label="Main navigation"]{ display:none !important }
          .burger-btn{ display:flex }
        }

        /* Ensure mobile menu elements are not present on larger screens */
        @media (min-width:901px){
          .mobile-backdrop, .mobile-menu{ display:none }
        }
      `}</style>
    </header>
  );
}
