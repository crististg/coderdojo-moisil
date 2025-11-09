import React from "react";
import Link from 'next/link'

export default function Header() {
  return (
    // Floating, centered header bar that sits on top of the hero
    <header style={{ position: 'absolute', left: 0, right: 0, top: 24, zIndex: 60, pointerEvents: 'auto' }}>
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
              src="https://github.com/crististg/coderdojo-moisil/blob/main/public/logo.png?raw=true"
              alt="CoderDojo Moisil logo"
              style={{ height: 56, width: 56, borderRadius: 12, background: 'transparent', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, lineHeight: 1 }}>{'CoderDojo Timișoara @Moisil'}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>playful coding club</div>
            </div>
          </Link>

          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Link href="/about" className="nav-link" style={{ color: '#111827', textDecoration: 'none', fontSize: 14 }}>About</Link>
            <Link href="/events" className="nav-link" style={{ color: '#111827', textDecoration: 'none', fontSize: 14 }}>Events</Link>
            <a href="#join" className="btn header-cta" style={{ fontSize: 14 }}>Join us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
