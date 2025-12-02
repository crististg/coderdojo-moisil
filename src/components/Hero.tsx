import React, { useRef, useCallback } from "react";
import Link from 'next/link'

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const b1 = useRef<HTMLDivElement | null>(null);
  const b2 = useRef<HTMLDivElement | null>(null);
  const b3 = useRef<HTMLDivElement | null>(null);
  const b4 = useRef<HTMLDivElement | null>(null);
  const b5 = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width; // -0.5..0.5 ish
    const dy = (e.clientY - cy) / rect.height;

    // Different parallax strengths for each bubble
    if (b1.current) b1.current.style.transform = `translate(${dx * 36}px, ${dy * 20}px)`;
    if (b2.current) b2.current.style.transform = `translate(${dx * -28}px, ${dy * -12}px)`;
    if (b3.current) b3.current.style.transform = `translate(${dx * 18}px, ${dy * -8}px)`;
    if (b4.current) b4.current.style.transform = `translate(${dx * -20}px, ${dy * 14}px)`;
    if (b5.current) b5.current.style.transform = `translate(${dx * 26}px, ${dy * -18}px)`;
  }, []);

  // I decided not to reset the bubble positions on mouse leave —
  // leaving them where the cursor was gives the hero a bit of 'memory'.
  // (Small UX choice by Cristi, Dec 2025.)

  return (
    <section
      className="hero-landing"
      id="home"
      aria-label="Hero"
      ref={rootRef}
      onMouseMove={handleMove}
    >
      {/* Tiled background pattern (binary 1s and 0s) */}
      <div className="bg-pattern" aria-hidden />

  {/* Decorative bubbles (will parallax with cursor). Their transforms persist after exit. */}
  <div ref={b1} className="bubble b1" aria-hidden />
  <div ref={b2} className="bubble b2" aria-hidden />
  <div ref={b3} className="bubble b3" aria-hidden />
  <div ref={b4} className="bubble b4" aria-hidden />
  <div ref={b5} className="bubble b5" aria-hidden />

        <div className="container hero-grid">
          <div className="hero-left">
            <div className="badge">🎯 Free workshops • ages 7–17</div>
            <h1>
              CoderDojo
              <br />
              <span className="accent">Timișoara @ Moisil</span>
            </h1>
            <p className="muted">
              Friendly, hands-on sessions where kids build games, projects and
              discover digital skills with mentors.
            </p>
            <p style={{ marginTop: 18 }}>
              <a className="btn" href="#join">Join a session</a>
              <Link style={{ marginLeft: 12 }} className="nav-link arrow-link" href="/events">See events <span className="arrow" aria-hidden>➜</span></Link>
            </p>
          </div>

            <div className="hero-visual">
            <div className="visual-plate">
              <img src="/logo.png" alt="CoderDojo Moisil logo" className="hero-logo" />
            </div>
          </div>

        </div>
    </section>
  );
}
