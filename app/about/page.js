
'use client'
import Link from 'next/link'

export const metadata = {
  title: 'About - Oceanside Music Festival',
  description: 'Learn about the Oceanside Community Music Festival and our mission to celebrate local music',
}

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>About the Festival</h1>
          <p>Celebrating music, community, and the beautiful Oceanside spirit</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2>Our Mission</h2>
              <p>
                The Oceanside Community Music Festival was born from a simple idea: bring people together 
                through the universal language of music. Since our first event in 2020, we've grown into 
                North County's premier community music celebration.
              </p>
              <p>
                We believe in supporting local artists, fostering community connections, and creating 
                unforgettable experiences that celebrate the unique culture and beauty of Oceanside.
              </p>
              <Link href="/volunteer" className="btn btn-primary">Join Our Mission</Link>
            </div>
            <div className="about-image">
              <div style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', 
                height: '300px', 
                borderRadius: 'var(--border-radius)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '4rem'
              }}>
                🎵
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Values</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>🎸 Local First</h3>
              <p>
                We prioritize showcasing talented local musicians and supporting the North County music scene. 
                Over 70% of our lineup features regional artists.
              </p>
            </div>
            <div className="card">
              <h3>🌱 Sustainability</h3>
              <p>
                Environmental responsibility is core to our values. We use renewable energy, compostable materials, 
                and partner with local environmental groups.
              </p>
            </div>
            <div className="card">
              <h3>🤝 Community</h3>
              <p>
                This festival is by the community, for the community. We reinvest proceeds into local music 
                education and community programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Story</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>The Beginning</h4>
                <p>Started as a small acoustic showcase in Sunset Market with 5 local artists and 200 attendees.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>Growing Roots</h4>
                <p>Moved to the beach with 15 artists and 800 music lovers joining our celebration.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h4>Community Festival</h4>
                <p>Expanded to two days with 25 artists, food vendors, and family activities. 2,000 attendees!</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>Regional Recognition</h4>
                <p>Featured touring artists alongside locals, 35 total performers, and over 4,000 festival-goers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>This Year</h4>
                <p>Our biggest year yet with 40+ artists, expanded venues, and expected 6,000+ attendees!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet the Team</h2>
          <div className="grid grid-3">
            <div className="card team-member">
              <div className="team-avatar">👩‍🎤</div>
              <h4>Sarah Martinez</h4>
              <p><strong>Festival Director</strong></p>
              <p>Local musician turned festival organizer, Sarah founded the festival to celebrate our amazing music community.</p>
            </div>
            <div className="card team-member">
              <div className="team-avatar">👨‍🎵</div>
              <h4>Mike Chen</h4>
              <p><strong>Music Director</strong></p>
              <p>Sound engineer and booking agent who curates our incredible lineup and manages all technical aspects.</p>
            </div>
            <div className="card team-member">
              <div className="team-avatar">👩‍💼</div>
              <h4>Jessica Torres</h4>
              <p><strong>Community Coordinator</strong></p>
              <p>Connects with local businesses, volunteers, and organizations to make this a true community celebration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Be Part of Our Story</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Whether you're a music lover, local artist, or community member, there's a place for you at our festival.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/lineup" className="btn btn-primary">View This Year's Lineup</Link>
            <Link href="/volunteer" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gradient);
          transform: translateX(-50%);
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .timeline-item:nth-child(odd) {
          flex-direction: row-reverse;
        }
        
        .timeline-year {
          background: var(--gradient);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          font-weight: bold;
          margin: 0 2rem;
          min-width: 80px;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        
        .timeline-content {
          background: white;
          padding: 1.5rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          flex: 1;
          max-width: 300px;
        }
        
        .timeline-content h4 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        .team-member {
          text-align: center;
        }
        
        .team-avatar {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        
        .team-member h4 {
          color: var(--dark-color);
          margin-bottom: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }
          
          .timeline-item {
            flex-direction: row !important;
          }
          
          .timeline-year {
            margin: 0 1rem 0 0;
            min-width: 60px;
          }
          
          .timeline-content {
            max-width: none;
          }
        }
      `}</style>
    </>
  )
}