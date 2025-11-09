import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>CoderDojo Timișoara @Moisil</title>
        <meta name="description" content="CoderDojo Timișoara @Moisil — playful coding workshops for young people." />
      </Head>

      <Header />

      <main>
        <Hero />

  <section className="programs-bg container" id="about">
          <div className="about-diagonals" aria-hidden />
          <h2 style={{ marginTop: 18 }}>What we do</h2>
          <p className="muted">Small, project-based sessions where kids learn to code, create games, and build small hardware projects with friendly mentors.</p>

          <div style={{ marginTop: 18, display: 'grid', gap: 16 }}>
            <div className="play-card">
              <div className="content">
                <strong>Build projects with mentors</strong>
                <div className="muted">Hands-on support to turn ideas into working projects — from concept to demo.</div>
              </div>
            </div>

            <div className="play-card">
              <div className="content">
                <strong>Experiment with creative tech</strong>
                <div className="muted">Explore web, animation, sound and simple circuits in playful mini-projects.</div>
              </div>
            </div>

            <div className="play-card">
              <div className="content">
                <strong>Collaborate and present</strong>
                <div className="muted">Work in small teams, give short demos and celebrate learning with classmates.</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <Link className="btn" href="/about#programs">See full programs</Link>
          </div>
        </section>

        <section className="container join-section" id="join">
          <h2 style={{ marginTop: 28 }}>Join us</h2>
          <p className="muted">Bring curiosity — we'll bring the support and the fun. There are a few ways to get involved:</p>

          <div className="join-grid" style={{ marginTop: 20 }}>
            <div className="join-card">
              <div className="icon" aria-hidden>🎉</div>
              <div className="body">
                <strong>Attend an event</strong>
                <p className="muted">Hands-on workshops for kids — friendly mentors and fun projects.</p>
                <div className="btn-row">
                  <Link className="btn" href="/events">See events</Link>
                </div>
              </div>
            </div>

            <div className="join-card">
              <div className="icon" aria-hidden>✉️</div>
              <div className="body">
                <strong>Get notified</strong>
                <p className="muted">Sign up to receive event announcements and sign-ups.</p>
                <div className="btn-row">
                  <a className="btn" href="mailto:info@coderdojo-moisil.ro">Email us</a>
                </div>
              </div>
            </div>

            <div className="join-card">
              <div className="icon" aria-hidden>🤝</div>
              <div className="body">
                <strong>Become a mentor</strong>
                <p className="muted">Volunteer your time and skills — support learners and projects.</p>
                <div className="btn-row">
                  <Link className="btn" href="/about#contact">Volunteer</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
