// Login page — small login UI for organizers. Hand-tweaked copy and layout.
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login • CoderDojo Timișoara @Moisil</title>
        <meta name="description" content="Login to CoderDojo Timișoara @Moisil — organizer/admin sign in." />
      </Head>

      <Header />

  <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div style={{ width: '100%', maxWidth: 1100, padding: '0 16px' }}>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '100%', borderRadius: 14, background: '#fff', boxShadow: '0 30px 80px rgba(11,11,11,0.06)', border: '1px solid rgba(11,11,11,0.04)', overflow: 'hidden' }} className="login-card">

              

              {/* Right: login form inside the same card */}
              <div style={{ flex: 1, padding: '36px 32px' }}>
                <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800 }}>Welcome back</h2>
                <p style={{ marginTop: 8, color: '#6b7280' }}>If you're an organizer, sign in here to manage events and sessions.</p>

                <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 18 }}>
                  <label style={{ display: 'block', fontSize: 13, marginBottom: 8 }}>Email address</label>
                  <input className="input" type="email" placeholder="you@example.com" style={{ width: '100%', marginBottom: 12 }} />

                  <label style={{ display: 'block', fontSize: 13, marginBottom: 8 }}>Password</label>
                  <input className="input" type="password" placeholder="Your password" style={{ width: '100%', marginBottom: 10 }} />

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280' }}>
                      <input type="checkbox" /> <span style={{ fontSize: 13 }}>Remember me</span>
                    </label>
                    <Link href="#" style={{ color: '#2563eb', fontSize: 13 }}>Forgot password?</Link>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <button className="btn" style={{ width: '100%', padding: '12px 14px', fontSize: 16 }}>Sign in</button>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: 12, color: '#6b7280' }}>
                    <small>Don't have an account? <Link href="/register">Register</Link></small>
                  </div>
                </form>
              </div>
              {/* Left: logo inside the card */}
              <div style={{ flex: '0 0 420px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28 }} className="login-logo-wrap">
                <img src="/logo.png" alt="CoderDojo logo" style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .login-wrap { gap: 28px; }
        @media (max-width: 900px) {
          .login-wrap { flex-direction: column-reverse; align-items: center; }
          .login-wrap > div { width: 100% !important; max-width: 720px; }
          .login-logo-wrap { width: 280px !important; height: 280px !important; }
        }
        @media (max-width: 520px) {
          .login-logo-wrap { width: 220px !important; height: 220px !important; }
        }
      `}</style>
    </>
  )
}
