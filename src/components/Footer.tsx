import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center" }}>
          <img src="/logo.png" alt="logo" style={{ height: 42 }} />
        </div>
        <p style={{ marginTop: 12 }} className="muted">© {new Date().getFullYear()} CoderDojo Timișoara @Moisil — playful coding for young people.</p>
      </div>
    </footer>
  );
}
