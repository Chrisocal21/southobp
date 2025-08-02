

'use client'
import Link from 'next/link'

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>About the Block Party</h1>
          <p>Celebrating music, community, and the beautiful Oceanside vibes</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2>Our Mission</h2>
              <p>
                The South O Block Party began as a simple gathering hosted by Dave Boudreau, bringing together close friends and neighbors on a sunny street in South Oceanside. What started as a laid-back hangout quickly grew into something much bigger — a true community celebration.The South O Block Party was born from a simple idea: bring people together
              </p>
              <p>
                Now an annual tradition, the South O Block Party showcases a diverse lineup of local bands, vibrant art from talented local artists, and mouthwatering food from favorite neighborhood vendors. At its heart, the event is about connection — a day to come together, celebrate creativity, support small businesses, and enjoy the unique spirit of South O.
              </p>
              <p>
                Coming off the success of the 2025 event, we’re already looking ahead to 2026 with even more excitement. This year, we’re expanding — with more space, more music, more art, and more ways to bring the community even closer together.
                We believe in supporting local artists, fostering community connections, and creating 
                unforgettable experiences that celebrate the unique culture and beauty of Oceanside.
              </p>
              <p>
                If you're part of a band, an artist looking to showcase your work, or a local vendor hoping to share your goods, we’d love to have you. Reach out now to reserve your spot — our new vendor areas are filling fast, and we want to make sure there’s room for everyone who helps make South O special.
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
                The heart of South O beats through its artists. We proudly put local talent front and center — from bands and solo musicians to street performers and DJs. Over 70% of our lineup is made up of North County's own, because we believe the best sounds come from right here at home.
              </p>
            </div>
            <div className="card">
              <h3>🌊 Keep It Real</h3>
              <p>
                South O Block Party is rooted in real people, real stories, and real culture. We aim to keep the vibe authentic — laid-back, creative, and full of character. Whether you're BBQing with friends, jamming on stage, or just dancing in the street to the tunes, you're part of the experience.
              </p>
            </div>
            <div className="card">
              <h3>🤝 Built by Community</h3>
              <p>
                South O Block Party is more than just a day — it's a movement built by neighbors, friends, and local legends. All proceeds from merch and the event go directly back into next year’s party and help fund community-driven vibes all year long through new releases, pop-ups, and grassroots projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* History */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How It All Began</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>Small Beginnings</h4>
                <p>What started as a casual front yard jam hosted by Dave Boudreau quickly became a beloved neighborhood tradition. Friends, family, and neighbors gathered for music, food, and good times in the heart of South Oceanside.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Block Party Spirit</h4>
                <p>Word spread, and the event spilled out onto the street. local musicians joined in, and the first official South O Block Party was born—celebrating the creative spirit and tight-knit community of South O.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Growing Together</h4>
                <p>With each year, the party grew—adding more bands, artists, and vendors. The event became a showcase for local talent and a day for everyone to connect, dance, and celebrate what makes Oceanside unique.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Community at the Core</h4>
                <p>South O Block Party became a true community Block Party, with proceeds funding back into the block party and event’s heart remained the same: music, art, and togetherness.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Making Waves</h4>
                <p>Now the block party features regional acts alongside homegrown talent, and brought even more people together for a day of unforgettable memories.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Record Year</h4>
                <p>2024 saw our biggest turnout yet, with 300+ people and 8 bands performing. The Block Party's energy and community spirit reached new heights.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>Even Bigger</h4>
                <p>2025 brought a bigger stage, more music, and even greater community involvement. The block party grew to a record-breaking size 600+, welcoming new artists and more families than ever before.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h4>Looking Ahead</h4>
                <p>Plans are already underway for 2026—expect more music, more art, and more ways to celebrate the spirit of South O together!</p>
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
              <h4>Dave Boudreau</h4>
              <p><strong>Block Party Director & CEO</strong></p>
              <p>Founder, owner, and the driving force behind the Block Party—wears all hats to make it happen.</p>
            </div>
            <div className="card team-member">
              <div className="team-avatar">👨‍🎵</div>
              <h4>Steve Tanner</h4>
              <p><strong>Music Director</strong></p>
              <p>Sound engineer, booking agent, and vocalist in multiple bands. Brings the stage, audio equipment, drum kit, microphones, and more—making the music happen every year.</p>
            </div>
            <div className="card team-member">
              <div className="team-avatar">👩‍💼</div>
              <h4>Chris O'Connell</h4>
              <p><strong>Digital & Community Lead</strong></p>
              <p>Web development, community engagement, photography coordination, and webstore management for the Block Party.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Be Part of Our Story</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Whether you're a music lover, local artist, or community member, there's a place for you at our block party.
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
        
        /* Timeline: 1st item left, 2-6 right, rest left */
        .timeline-item {
          flex-direction: row;
        }
        .timeline-item:nth-child(n+2):nth-child(-n+6),
        .timeline-item:last-child {
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