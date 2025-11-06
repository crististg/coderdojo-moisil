import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="site-header container">
      <div className="brand">
        <img src="/logo.png" alt="CoderDojo Moisil logo" />
        <div>
          <div className="title">CoderDojo Timișoara @Moisil</div>
          <div className="muted" style={{ fontSize: 12 }}>playful coding club</div>
        </div>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <Link href="#about">About</Link>
        <Link href="#events">Events</Link>
        <a className="cta" href="#join">Join us</a>
      </nav>
    </header>
  );
}
