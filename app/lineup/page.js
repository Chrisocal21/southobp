'use client'
import { useState } from 'react'

export default function Lineup() {
  const [selectedYear, setSelectedYear] = useState('2024')

  // Remove old lineup data and placeholder content




  return (
    <>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Festival Lineup</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="year-selector-stacked">
            <button
              className={`year-btn ${selectedYear === '2024' ? 'active' : ''}`}
              onClick={() => setSelectedYear('2024')}
            >
              2024
            </button>
            <button
              className={`year-btn ${selectedYear === '2025' ? 'active' : ''}`}
              onClick={() => setSelectedYear('2025')}
            >
              2025
            </button>
            <button
              className={`year-btn ${selectedYear === '2026' ? 'active' : ''}`}
              onClick={() => setSelectedYear('2026')}
            >
              2026
            </button>
          </div>
          <div className="lineup-container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{selectedYear} Lineup</h2>
            <div className="lineup-flyer-wrapper">
              {selectedYear === '2026' ? (
                <div className="tba-warning">Lineup for 2026: <strong>TBA</strong></div>
              ) : (
                <img
                  src={`/assets/images/lineup/lineup-${selectedYear}.png`}
                  alt={`${selectedYear} Lineup Flyer`}
                  className="lineup-flyer"
                />
              )}
            </div>
          </div>
        </div>
      </section>



      <style jsx>{`
        .year-selector-stacked {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .year-btn {
          width: 180px;
          padding: 1.2rem 0;
          border: 2px solid var(--primary-color);
          background: white;
          color: var(--primary-color);
          border-radius: var(--border-radius);
          font-weight: 700;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .year-btn.active,
        .year-btn:hover {
          background: var(--primary-color);
          color: white;
        }
        .lineup-flyer-wrapper {
          margin-top: 1.5rem;
          text-align: center;
        }
        .lineup-flyer {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .tba-warning {
          color: #b85c00;
          background: #fffbe6;
          border: 1px solid #ffe0a3;
          border-radius: 8px;
          padding: 1.5rem 1rem;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 2rem auto 0;
          max-width: 400px;
          box-shadow: 0 2px 8px rgba(255, 184, 76, 0.08);
        }
        @media (max-width: 600px) {
          .year-btn {
            width: 100%;
            font-size: 1rem;
            padding: 1rem 0;
          }
        }
      `}</style>
    </>
  )
}