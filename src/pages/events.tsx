import Head from 'next/head'
import React, { useEffect, useState, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const CALENDAR_ID = 'coderdojo@moisiltm.ro'
const CALENDAR_SRC = encodeURIComponent(CALENDAR_ID)
const IFRAME_SRC = `https://calendar.google.com/calendar/embed?src=${CALENDAR_SRC}&ctz=Europe/Bucharest&mode=MONTH&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0`;

type EventItem = {
  id: string;
  title: string;
  start: string; // ISO
  when: string; // human-friendly
  location?: string;
  desc?: string;
}

function parseIcsDate(raw: string) {
  // ICS dates are like: 20251109 or 20251109T183000Z
  if (!raw) return null
  const clean = raw.trim()
  if (/^\d{8}T\d{6}Z$/.test(clean)) {
    // YYYYMMDDTHHMMSSZ -> YYYY-MM-DDTHH:MM:SSZ
    const y = clean.slice(0,4)
    const m = clean.slice(4,6)
    const d = clean.slice(6,8)
    const hh = clean.slice(9,11)
    const mm = clean.slice(11,13)
    const ss = clean.slice(13,15)
    return new Date(`${y}-${m}-${d}T${hh}:${mm}:${ss}Z`)
  }
  if (/^\d{8}$/.test(clean)) {
    const y = clean.slice(0,4)
    const m = clean.slice(4,6)
    const d = clean.slice(6,8)
    return new Date(`${y}-${m}-${d}T00:00:00`)
  }
  // fallback
  const d = new Date(clean)
  return isNaN(d.getTime()) ? null : d
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Photo stack state & shuffle controls
  const [photos, setPhotos] = useState<string[]>(['/1.png', '/2.png', '/3.png', '/4.png'])
  const photoStackRef = useRef<HTMLDivElement | null>(null)
  const shuffleRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startShuffle = () => {
    if (shuffleRef.current) return
    // rotate photos every 800ms while hovering
    shuffleRef.current = setInterval(() => {
      setPhotos((p) => {
        if (p.length <= 1) return p
        const next = [...p]
        next.unshift(next.pop()!)
        return next
      })
    }, 800)
  }

  const stopShuffle = () => {
    if (shuffleRef.current) {
      clearInterval(shuffleRef.current as unknown as number)
      shuffleRef.current = null
    }
  }

  useEffect(() => {
    let mounted = true
    async function fetchEvents() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/calendar')
        if (!res.ok) {
          const payload = await res.json().catch(() => ({}))
          throw new Error(payload?.error || `Calendar API error ${res.status}`)
        }
        const data = await res.json()
        // normalize payload to EventItem[]
        if (Array.isArray(data)) {
          const items: EventItem[] = data.slice(0, 6).map((it: any) => {
            const startIso = it.start || it.date || ''
            const startDate = startIso ? new Date(startIso) : null
            const when = startDate ? startDate.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : ''
            return { id: it.id || it.uid || JSON.stringify(it), title: it.summary || it.title || 'Event', start: startDate ? startDate.toISOString() : '', when, location: it.location || '', desc: it.description || it.desc || '' }
          })
          if (mounted) setEvents(items.slice(0, 3))
        } else {
          throw new Error('Invalid calendar response')
        }
      } catch (err: any) {
        if (mounted) setError(err?.message || 'Failed to load events')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchEvents()
    return () => { mounted = false }
  }, [])

  // cleanup shuffle timer on unmount
  useEffect(() => {
    return () => {
      if (shuffleRef.current) {
        clearInterval(shuffleRef.current as unknown as number)
        shuffleRef.current = null
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Events • CoderDojo Timișoara @Moisil</title>
        <meta name="description" content="Upcoming events and calendar for CoderDojo Timișoara @Moisil — workshops, dojos and community meetups." />
      </Head>

      <Header />

      <main>
        <section className="hero-landing events-hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="badge">Events</div>
                <h1 className="about-title">Meetups, workshops &amp; Dojos</h1>
                <p className="about-lead">Join our friendly sessions — coding, robotics and creative tech, for ages 7+. Sync with our calendar to stay up to date.</p>
                <div style={{ marginTop: 20 }}>
                  <a className="btn" href="/about">Learn about the club</a>
                  <a className="btn header-cta" style={{ marginLeft: 12 }} href="/contact">Contact us</a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="visual-plate">
                  {/* PhotoStack component inlined below */}
                  <div className="photo-stack" ref={photoStackRef} onMouseEnter={startShuffle} onMouseLeave={stopShuffle} aria-hidden>
                    {photos.map((src, i) => (
                      // decorative photos — loaded from /1.png .. /4.png in public/
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={src} src={src} alt="" className="stack-photo" style={{ zIndex: 20 - i }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* hero-right removed per design — photos take the visual spot */}
            </div>
          </div>
        </section>

        <section className="programs-bg" id="events">
          <div className="container">
            <div className="events-grid">
              <div className="calendar-card">
                <div className="calendar-card-head">
                  <h3>Calendar</h3>
                  <div className="muted">Month view</div>
                </div>
                <div className="calendar-embed">
                  <iframe title="CoderDojo calendar" src={IFRAME_SRC} loading="lazy" aria-hidden={false} />
                </div>
              </div>

              <aside className="events-side">
                <div className="events-list">
                  <h4>Upcoming</h4>
                  {/* Promoted event: next Friday 15:00–17:00 */}
                  {(() => {
                    // compute next Friday 15:00-17:00
                    const now = new Date();
                    const dow = now.getDay(); // 0 Sun .. 5 Fri
                    const daysUntilFriday = ((5 - dow) + 7) % 7 || 7;
                    const start = new Date(now);
                    start.setDate(now.getDate() + daysUntilFriday);
                    start.setHours(15, 0, 0, 0);
                    const end = new Date(start);
                    end.setHours(17, 0, 0, 0);

                    const when = start.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' — ' + end.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

                    const toGCalDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
                    const gcalDates = `${toGCalDate(start)}/${toGCalDate(end)}`;
                    const addUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent('Session CoderDojo @Moisil')}&dates=${gcalDates}&details=${encodeURIComponent('Join our weekly session at Liceul Teoretic Grigore Moisil Timisoara')}&location=${encodeURIComponent('Liceul Teoretic Grigore Moisil Timisoara')}`;

                    return (
                      <div className="event-card">
                        <div className="event-info">
                          <div className="event-title">Session CoderDojo @Moisil</div>
                          <div className="event-meta">{when} • Liceul Teoretic Grigore Moisil Timisoara</div>
                        </div>
                        <a className="event-chip" href={addUrl} target="_blank" rel="noopener noreferrer">Add</a>
                      </div>
                    );
                  })()}
                </div>

                <div style={{ marginTop: 18 }}>
                  <a className="btn" href="mailto:coderdojo@moisiltm.ro">Email the organizers</a>
                  <a className="muted-link arrow-link" style={{ marginLeft: 12 }} href="/about">About the club <span className="arrow">→</span></a>
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
