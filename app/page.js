import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Oceanside Community Music Festival</h1>
          <p>Join us for an unforgettable celebration of music, community, and California sunshine</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/lineup" className="btn btn-primary">View Lineup</Link>
            <Link href="/volunteer" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>

      {/* Festival Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card fade-in-up">
              <h3>🎤 Amazing Artists</h3>
              <p>Featuring local and touring musicians across multiple genres - from indie rock to folk, electronic to acoustic.</p>
              <Link href="/lineup" className="btn btn-primary">See Full Lineup</Link>
            </div>
            <div className="card fade-in-up">
              <h3>🌊 Beach Vibes</h3>
              <p>Located in beautiful Oceanside, CA with stunning ocean views and perfect weather for an outdoor festival.</p>
              <Link href="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="card fade-in-up">
              <h3>🤝 Community First</h3>
              <p>A grassroots festival celebrating our local music scene and bringing our community together through music.</p>
              <Link href="/volunteer" className="btn btn-primary">Join Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Festival Details</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>📅 When & Where</h3>
              <p><strong>Date:</strong> July 15-16, 2024</p>
              <p><strong>Time:</strong> 12:00 PM - 11:00 PM</p>
              <p><strong>Location:</strong> Oceanside Beach Park</p>
              <p><strong>Address:</strong> 123 Pacific Coast Hwy, Oceanside, CA</p>
            </div>
            <div className="card">
              <h3>🎟️ Tickets & Pricing</h3>
              <p><strong>Early Bird:</strong> $45/day or $75/weekend</p>
              <p><strong>General Admission:</strong> $55/day or $95/weekend</p>
              <p><strong>VIP:</strong> $125/weekend (includes perks)</p>
              <p><strong>Kids 12 & Under:</strong> Free with adult</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Rock?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Don't miss out on Oceanside's biggest music celebration of the year. Get your tickets now!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#tickets" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
              Buy Tickets Now
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
              <p>Help make the festival amazing and get free admission!</p>
            </Link>
            <Link href="/donate" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>💝 Donate</h4>
              <p>Support local music and community programs.</p>
            </Link>
            <Link href="/merch" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>👕 Merch</h4>
              <p>Show your festival pride with official gear.</p>
            </Link>
            <Link href="/gallery" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>📸 Gallery</h4>
              <p>Check out photos from previous years.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}