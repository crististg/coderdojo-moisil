import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register • CoderDojo Timișoara @Moisil</title>
        <meta name="description" content="Create an account for CoderDojo Timișoara @Moisil." />
      </Head>

      <Header />

      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div style={{ width: '100%', maxWidth: 1100, padding: '0 16px' }}>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '100%', borderRadius: 14, background: '#fff', boxShadow: '0 30px 80px rgba(11,11,11,0.06)', border: '1px solid rgba(11,11,11,0.04)', overflow: 'hidden' }} className="register-card">

              {/* Left: logo inside the card */}
              <div style={{ flex: '0 0 420px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28 }} className="register-logo-wrap">
                <img src="/logo.png" alt="CoderDojo logo" style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }} />
              </div>

              {/* Right: register form inside the same card */}
              <div style={{ flex: 1, padding: '32px 28px' }}>
                <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800 }}>Create account</h2>
                <p style={{ marginTop: 8, color: '#6b7280' }}>Create an account to access the platform.</p>

                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .register-wrap { gap: 28px; }
        @media (max-width: 900px) {
          .register-wrap { flex-direction: column; align-items: center; }
          .register-wrap > div { width: 100% !important; max-width: 720px; }
          .register-logo-wrap { width: 280px !important; height: 280px !important; }
        }
        @media (max-width: 520px) {
          .register-logo-wrap { width: 220px !important; height: 220px !important; }
          form { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function RegisterForm() {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      setError('Please fill in all required fields.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      })

      if (res.ok) {
        router.push('/login')
        return
      }

      const body = await res.json().catch(() => ({}))
      setError(body?.message || 'Registration failed. Please try again.')
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      <div style={{ gridColumn: '1 / 2' }}>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>First name</label>
        <input className="input" type="text" placeholder="First name" style={{ width: '100%' }} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div style={{ gridColumn: '2 / 3' }}>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Last name</label>
        <input className="input" type="text" placeholder="Last name" style={{ width: '100%' }} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>

      <div style={{ gridColumn: '1 / 3' }}>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Email</label>
        <input className="input" type="email" placeholder="you@example.com" style={{ width: '100%' }} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div style={{ gridColumn: '1 / 2' }}>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Password</label>
        <input className="input" type="password" placeholder="Create a password" style={{ width: '100%' }} value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div style={{ gridColumn: '2 / 3' }}>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Confirm password</label>
        <input className="input" type="password" placeholder="Confirm password" style={{ width: '100%' }} value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
      </div>

      <div style={{ gridColumn: '1 / 3', marginTop: 8 }}>
        <button type="submit" className="btn" style={{ width: '100%', padding: '12px 14px', fontSize: 16, cursor: 'pointer' }} disabled={loading}>
          {loading ? 'Creating account…' : 'Create account'}
        </button>
      </div>

      <div style={{ gridColumn: '1 / 3', textAlign: 'center', marginTop: 6, color: '#6b7280' }}>
        <small>Already have an account? <Link href="/login">Sign in</Link></small>
      </div>

      {error && (
        <div style={{ gridColumn: '1 / 3', marginTop: 8, color: '#dc2626' }} role="alert" aria-live="polite">
          {error}
        </div>
      )}
    </form>
  )
}
