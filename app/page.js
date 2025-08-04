
"use client";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'none', padding: '4rem 0 2rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img 
            src="/assets/images/webassets/SOBP-Hero.png" 
            alt="South O Block Party Logo" 
            style={{
              maxWidth: '420px',
              width: '100%',
              height: 'auto',
              margin: '0 auto 2.5rem',
              display: 'block',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              borderRadius: '18px'
            }}
          />
          <div className="hero-whitebox">
            <p style={{ color: '#111', marginBottom: '1.5rem', fontSize: '1.18rem', fontWeight: 500 }}>
              Join us for an unforgettable celebration of music, community, and California sunshine
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lineup" className="btn btn-primary">View Lineup</Link>
              <Link href="/volunteer" className="btn btn-secondary">Get Involved</Link>
            </div>
          </div>
      <style jsx>{`
        .hero-whitebox {
          background: #fff;
          color: #111;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          padding: 2.5rem 2rem 2rem 2rem;
          max-width: 480px;
          margin: 0 auto 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
        </div>
      </section>

      {/* Festival Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card fade-in-up">
              <h3>🎤 Amazing Artists</h3>
              <p>Featuring local and touring musicians across multiple genres - from classic rock and roll to speed rock, glam rock to punk rock and more.</p>
              <Link href="/lineup" className="btn btn-primary">See Full Lineup</Link>
            </div>
            <div className="card fade-in-up">
              <h3>🌊 Beach Vibes</h3>
              <p>Located blocks from the beach in beautiful Oceanside, CA with perfect weather for an outdoor block party, this is the place to be!</p>
              <Link href="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="card fade-in-up">
              <h3>🤝 Community First</h3>
              <p>A grassroots block party celebrating our local music scene and bringing our community together through music, art, and food.</p>
              <Link href="/volunteer" className="btn btn-primary">Join Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Block Party Details</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>📅 When & Where</h3>
              <p><strong>Date:</strong> July TBA, 2026</p>
              <p><strong>Time:</strong> 12:00 PM - 10:00 PM</p>
              <p><strong>Location:</strong> South Oceanside, CA</p>
              <p><strong>Address:</strong> Griffin Street, Oceanside, CA</p>
            </div>
            <div className="card">
              <h3>🎟️ Block Party Events</h3>
              <p><strong>Music:</strong> 8+ Bands</p>
              <p><strong>Food:</strong> Local vendors, Food Trucks</p>
              <p><strong>Art:</strong> Local Artists, Live Murals</p>
              <p><strong>All Ages, family-friendly!</strong> </p>
            </div>
          </div>
        </div>
      </section>


        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Ready to Rock?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Don't miss out on South Oceanside's <span style={{ textDecoration: 'line-through' }}>smallest</span> biggest music celebration of the year.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#tickets" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
             More Info
          </a>
          <Link href="/news" className="btn btn-secondary">Latest Updates</Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get Involved</h2>
          <div className="grid grid-4">
            <Link href="/volunteer" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>🙋‍♀️ Volunteer</h4>
              <p>Help make the festival amazing and earn limited edition merch!</p>
            </Link>
            <Link href="/donate" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>💝 Donate</h4>
              <p>Support your favorite block party, and help us keep the music and vibes alive!</p>
            </Link>
            <Link href="/merch" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>👕 Merch</h4>
              <p>Buy your official block party gear.</p>
            </Link>           
          </div>
        </div>
      </section>
    </>
  )
}