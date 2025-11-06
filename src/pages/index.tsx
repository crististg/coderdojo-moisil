import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

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

        <section className="container" id="about">
          <h2 style={{ marginTop: 18 }}>What we do</h2>
          <p className="muted">Small, project-based sessions where kids learn to code, create games, and build small hardware projects with friendly mentors.</p>

          <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
            <div className="play-card">🏗️ Build projects with mentors</div>
            <div className="play-card">🎨 Experiment with creative tech</div>
            <div className="play-card">🤝 Collaborate and present</div>
          </div>
        </section>

        <section className="container" id="join">
          <h2 style={{ marginTop: 28 }}>Join us</h2>
          <p className="muted">Bring curiosity. We provide the support and the fun. Sign up on our events page (coming soon) or email the club to get notified.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
