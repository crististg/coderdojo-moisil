import React from "react";

export default function Footer() {
  return (
  <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="CoderDojo Moisil logo" className="footer-logo" />
        </div>

  <div className="footer-social">
          <a href="https://www.facebook.com/CoderDojoTimisoaraMoisil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            {/* Facebook SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 4.97 3.65 9.08 8.44 9.86v-6.98h-2.54v-2.88h2.54V9.41c0-2.51 1.5-3.9 3.79-3.9 1.1 0 2.25.19 2.25.19v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.88h-2.33v6.98c4.79-.78 8.44-4.89 8.44-9.86z" fill="currentColor"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/coderdojo_moisil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            {/* Instagram SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="footer-location">
          <a href="https://www.google.com/maps/place/Grigore+Moisil+High+School+-+Gymnasium+body/@45.741702,21.2292374,17.79z/data=!4m6!3m5!1s0x47455d9b928c2e05:0xaff2c8c80760425f!8m2!3d45.7417568!4d21.2265646!16s%2Fg%2F1w110zrb?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ marginRight: 8 }}>
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Piața Nicolae Bălcescu 2, Timișoara 300425
          </a>
        </div>

        <div className="footer-copy">
          <p className="muted" style={{ margin: 0 }}>© {new Date().getFullYear()} CoderDojo Timișoara @Moisil</p>
        </div>
      </div>
    </footer>
  );
}
