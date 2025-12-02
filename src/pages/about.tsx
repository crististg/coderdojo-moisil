import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

// Page copy and layout curated by Cristi (Dec 2025) — small, friendly notes
// kept in the page so reviewers see intent and easy places to edit copy.

export default function About() {
  return (
    <>
      <Head>
        <title>About — CoderDojo Timișoara @Moisil</title>
        <meta name="description" content="About CoderDojo Timișoara @Moisil — who we are and what we do." />
      </Head>

      <Header />

      <main>

        <section className="about-hero" aria-label="About hero">
          <div className="bg-pattern about-bg" aria-hidden />
          {/* decorative floating blobs */}
          <div className="about-bubble b1" aria-hidden />
          <div className="about-bubble b2" aria-hidden />
          <div className="about-bubble b3" aria-hidden />

          {/* diagonal accent lines */}
          <div className="about-diagonals" aria-hidden />

          <div className="container about-hero-grid">
            <div className="about-left">
              <div className="badge reveal" style={{ '--delay': '0ms' } as React.CSSProperties}>🎯 Our mission</div>
              <h1 className="about-title reveal" style={{ '--delay': '80ms' } as React.CSSProperties}>We teach curious kids to build, create and share</h1>
              <p className="muted about-lead reveal" style={{ '--delay': '160ms' } as React.CSSProperties}>CoderDojo Timișoara @Moisil runs playful, project-based sessions where young people explore programming, hardware, and digital creativity together with mentors from the community.</p>

              <div className="mt-6 reveal" style={{ '--delay': '240ms' } as React.CSSProperties}>
                <a href="#programs" className="btn pulse-once header-cta">See programs</a>
                <a href="#contact" className="muted-link arrow-link" style={{ marginLeft: 12 }}>Contact us <span className="arrow" aria-hidden>➜</span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="programs-bg py-12">
          <div className="container">
            <h2 className="text-2xl">Programs</h2>
            <p className="muted">We run friendly, project-based workshops across different tracks — each track focuses on hands-on practice, teamwork and small showcases.</p>

            <div className="grid grid-3 gap-6 section-gap-sm">
              <div className="play-card">
                <strong>Algorithmics</strong>
                <div style={{ marginTop: 8 }} className="muted">Problem solving, logical thinking, and algorithmic puzzles for learners who want to level up their computational thinking.</div>
              </div>
              <div className="play-card">
                <strong>Web Development</strong>
                <div style={{ marginTop: 8 }} className="muted">Build small websites and interactive projects using HTML, CSS and JavaScript — great for portfolio starters and creative experiments.</div>
              </div>
              <div className="play-card">
                <strong>Scratch</strong>
                <div style={{ marginTop: 8 }} className="muted">Block-based coding for younger learners to create games, stories and animations while learning programming fundamentals.</div>
              </div>
            </div>

            <div className="section-gap-lg">
              <h2 className="text-2xl">Champions & Mentors</h2>
              <p className="muted">Our team is a mix of organizing champions and volunteer mentors from schools and the local tech community. Champions help run the club and mentor sessions.</p>

              <h3 style={{ marginTop: 18 }}>Champions (organizers)</h3>
              <div className="team-grid" style={{ marginTop: 12 }}>
                <div className="team-card">
                  <div className="avatar">CS</div>
                  <div className="team-name">Cristi Stiegelbauer</div>
                  <div className="muted">Champion & Mentor</div>
                </div>
                <div className="team-card">
                  <div className="avatar">MG</div>
                  <div className="team-name">Mihai Gorunescu</div>
                  <div className="muted">Champion & Mentor</div>
                </div>
                <div className="team-card">
                  <div className="avatar">MJ</div>
                  <div className="team-name">Miruna Chira-Jurj</div>
                  <div className="muted">Champion & Mentor</div>
                </div>
              </div>

              <h3 style={{ marginTop: 22 }}>Mentors</h3>
              <div className="team-grid" style={{ marginTop: 12 }}>
                <div className="team-card">
                  <div className="avatar">AK</div>
                  <div className="team-name">Alexandru Kelemen</div>
                  <div className="muted">Mentor</div>
                </div>
                <div className="team-card">
                  <div className="avatar">AM</div>
                  <div className="team-name">Albert Molocea</div>
                  <div className="muted">Mentor</div>
                </div>
                <div className="team-card">
                  <div className="avatar">DP</div>
                  <div className="team-name">Dragos Popute</div>
                  <div className="muted">Mentor</div>
                </div>
                <div className="team-card">
                  <div className="avatar">AF</div>
                  <div className="team-name">Andrei Fluieras</div>
                  <div className="muted">Mentor</div>
                </div>
                <div className="team-card">
                  <div className="avatar">GF</div>
                  <div className="team-name">Gabriela Fishmann</div>
                  <div className="muted">Mentor</div>
                </div>
              </div>

              <div className="section-gap-lg">
                <h3 className="text-2xl">Get in touch</h3>
                <p className="muted">Have questions or want to volunteer? Email us and we will get back to you.</p>

                <div style={{ marginTop: 12 }}>
                  <a className="btn" href="mailto:coderdojo@moisiltm.ro">Email coderdojo@moisiltm.ro</a>
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
