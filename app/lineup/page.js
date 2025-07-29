'use client'
import { useState } from 'react'

export default function Lineup() {
  const [selectedDay, setSelectedDay] = useState('saturday')

  const lineup = {
    saturday: {
      date: 'Saturday, July 15',
      stages: {
        main: [
          { time: '8:00 PM', artist: 'The Sunset Collective', genre: 'Indie Rock', type: 'headliner' },
          { time: '6:30 PM', artist: 'Ocean Waves', genre: 'Surf Rock', type: 'featured' },
          { time: '5:00 PM', artist: 'Coastal Harmony', genre: 'Folk', type: 'support' },
          { time: '3:30 PM', artist: 'Beach Break', genre: 'Alternative', type: 'support' },
          { time: '2:00 PM', artist: 'Sol Sessions', genre: 'Reggae', type: 'opener' },
        ],
        acoustic: [
          { time: '7:00 PM', artist: 'Luna Martinez', genre: 'Singer-Songwriter', type: 'featured' },
          { time: '5:30 PM', artist: 'The Pier Poets', genre: 'Folk', type: 'support' },
          { time: '4:00 PM', artist: 'Whiskey & Words', genre: 'Americana', type: 'support' },
          { time: '2:30 PM', artist: 'Sunrise Serenade', genre: 'Acoustic', type: 'opener' },
        ],
        community: [
          { time: '6:00 PM', artist: 'Oceanside High Jazz Band', genre: 'Jazz', type: 'local' },
          { time: '4:30 PM', artist: 'Kids Choir Collective', genre: 'Children', type: 'local' },
          { time: '3:00 PM', artist: 'Guitar Circle Open Mic', genre: 'Various', type: 'local' },
        ]
      }
    },
    sunday: {
      date: 'Sunday, July 16',
      stages: {
        main: [
          { time: '8:00 PM', artist: 'Electric Tides', genre: 'Electronic', type: 'headliner' },
          { time: '6:30 PM', artist: 'The Local Sound', genre: 'Indie Pop', type: 'featured' },
          { time: '5:00 PM', artist: 'Rhythm & Waves', genre: 'Funk', type: 'support' },
          { time: '3:30 PM', artist: 'Golden State Mind', genre: 'Hip-Hop', type: 'support' },
          { time: '2:00 PM', artist: 'Driftwood', genre: 'Americana', type: 'opener' },
        ],
        acoustic: [
          { time: '7:00 PM', artist: 'Sarah Belle', genre: 'Folk', type: 'featured' },
          { time: '5:30 PM', artist: 'The Lighthouse Keepers', genre: 'Maritime Folk', type: 'support' },
          { time: '4:00 PM', artist: 'Wooden Ships', genre: 'Acoustic Rock', type: 'support' },
          { time: '2:30 PM', artist: 'Morning Tide', genre: 'Singer-Songwriter', type: 'opener' },
        ],
        community: [
          { time: '6:00 PM', artist: 'Carlsbad Community Orchestra', genre: 'Classical', type: 'local' },
          { time: '4:30 PM', artist: 'Youth Rock Academy', genre: 'Rock', type: 'local' },
          { time: '3:00 PM', artist: 'Family Jam Session', genre: 'Various', type: 'local' },
        ]
      }
    }
  }

  const getArtistTypeClass = (type) => {
    switch (type) {
      case 'headliner': return 'headliner'
      case 'featured': return 'featured'
      case 'support': return 'support'
      case 'local': return 'local'
      default: return 'opener'
    }
  }

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>2024 Lineup</h1>
          <p>Three stages, two days, endless amazing music</p>
        </div>
      </section>

      {/* Day Selection */}
      <section className="section">
        <div className="container">
          <div className="day-selector">
            <button 
              className={`day-btn ${selectedDay === 'saturday' ? 'active' : ''}`}
              onClick={() => setSelectedDay('saturday')}
            >
              Saturday July 15
            </button>
            <button 
              className={`day-btn ${selectedDay === 'sunday' ? 'active' : ''}`}
              onClick={() => setSelectedDay('sunday')}
            >
              Sunday July 16
            </button>
          </div>

          <div className="lineup-container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {lineup[selectedDay].date}
            </h2>
            
            <div className="stages-grid">
              {/* Main Stage */}
              <div className="stage-column">
                <div className="stage-header main-stage">
                  <h3>🎸 Main Stage</h3>
                  <p>Oceanside Beach Park</p>
                </div>
                <div className="artist-list">
                  {lineup[selectedDay].stages.main.map((act, index) => (
                    <div key={index} className={`artist-card ${getArtistTypeClass(act.type)}`}>
                      <div className="artist-time">{act.time}</div>
                      <div className="artist-info">
                        <h4>{act.artist}</h4>
                        <p>{act.genre}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acoustic Stage */}
              <div className="stage-column">
                <div className="stage-header acoustic-stage">
                  <h3>🎤 Acoustic Stage</h3>
                  <p>Sunset Amphitheater</p>
                </div>
                <div className="artist-list">
                  {lineup[selectedDay].stages.acoustic.map((act, index) => (
                    <div key={index} className={`artist-card ${getArtistTypeClass(act.type)}`}>
                      <div className="artist-time">{act.time}</div>
                      <div className="artist-info">
                        <h4>{act.artist}</h4>
                        <p>{act.genre}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Stage */}
              <div className="stage-column">
                <div className="stage-header community-stage">
                  <h3>🏘️ Community Stage</h3>
                  <p>Pier Plaza</p>
                </div>
                <div className="artist-list">
                  {lineup[selectedDay].stages.community.map((act, index) => (
                    <div key={index} className={`artist-card ${getArtistTypeClass(act.type)}`}>
                      <div className="artist-time">{act.time}</div>
                      <div className="artist-info">
                        <h4>{act.artist}</h4>
                        <p>{act.genre}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="section section-alt">
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Artist Categories</h3>
          <div className="legend">
            <div className="legend-item">
              <div className="legend-color headliner"></div>
              <span>Headliners</span>
            </div>
            <div className="legend-item">
              <div className="legend-color featured"></div>
              <span>Featured Artists</span>
            </div>
            <div className="legend-item">
              <div className="legend-color support"></div>
              <span>Supporting Acts</span>
            </div>
            <div className="legend-item">
              <div className="legend-color local"></div>
              <span>Local Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Don't Miss Out!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Get your festival pass now and experience all these amazing artists live.
          </p>
          <a href="#tickets" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
            Buy Festival Passes
          </a>
        </div>
      </section>

      <style jsx>{`
        .day-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .day-btn {
          padding: 1rem 2rem;
          border: 2px solid var(--primary-color);
          background: white;
          color: var(--primary-color);
          border-radius: var(--border-radius);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .day-btn.active,
        .day-btn:hover {
          background: var(--primary-color);
          color: white;
        }
        
        .stages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .stage-column {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        
        .stage-header {
          padding: 1.5rem;
          color: white;
          text-align: center;
        }
        
        .main-stage {
          background: var(--gradient);
        }
        
        .acoustic-stage {
          background: linear-gradient(135deg, #c5d86d 0%, #8bc34a 100%);
        }
        
        .community-stage {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }
        
        .stage-header h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
        }
        
        .stage-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.9rem;
        }
        
        .artist-list {
          padding: 1rem;
        }
        
        .artist-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          border-left: 4px solid #ddd;
          background: #f8f9fa;
          transition: transform 0.2s ease;
        }
        
        .artist-card:hover {
          transform: translateX(5px);
        }
        
        .artist-card.headliner {
          border-left-color: var(--primary-color);
          background: linear-gradient(90deg, rgba(255, 107, 53, 0.1) 0%, #f8f9fa 20%);
        }
        
        .artist-card.featured {
          border-left-color: var(--secondary-color);
          background: linear-gradient(90deg, rgba(247, 147, 30, 0.1) 0%, #f8f9fa 20%);
        }
        
        .artist-card.support {
          border-left-color: var(--accent-color);
          background: linear-gradient(90deg, rgba(197, 216, 109, 0.1) 0%, #f8f9fa 20%);
        }
        
        .artist-card.local {
          border-left-color: #6c757d;
          background: linear-gradient(90deg, rgba(108, 117, 125, 0.1) 0%, #f8f9fa 20%);
        }
        
        .artist-time {
          font-weight: bold;
          color: var(--dark-color);
          min-width: 70px;
          font-size: 0.9rem;
        }
        
        .artist-info h4 {
          margin: 0 0 0.2rem 0;
          color: var(--dark-color);
          font-size: 1.1rem;
        }
        
        .artist-info p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }
        
        .legend {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .legend-color {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }
        
        .legend-color.headliner {
          background: var(--primary-color);
        }
        
        .legend-color.featured {
          background: var(--secondary-color);
        }
        
        .legend-color.support {
          background: var(--accent-color);
        }
        
        .legend-color.local {
          background: #6c757d;
        }
        
        @media (max-width: 768px) {
          .day-selector {
            flex-direction: column;
          }
          
          .stages-grid {
            grid-template-columns: 1fr;
          }
          
          .legend {
            gap: 1rem;
          }
        }
      `}</style>
    </>
  )
}