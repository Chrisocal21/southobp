


'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  // Demo photo data - replace with actual photos
  const photoGalleries = [
    {
      year: '2025',
      photos: [
        { id: 1, src: '/assets/images/2025/PXL_20250726_222106007 - tim booher.jpg' },
        { id: 2, src: '/assets/images/2025/PXL_20250726_224451377 - tim booher.jpg' },
        { id: 3, src: '/assets/images/2025/PXL_20250727_003801302 - tim booher.jpg' },
        { id: 4, src: '/assets/images/2025/PXL_20250727_015452964 - tim booher.jpg' },
        { id: 5, src: '/assets/images/2025/PXL_20250727_033351246 - tim booher.jpg' },
        { id: 6, src: '/assets/images/2025/PXL_20250727_041743315 - tim booher.jpg' },
      ]
    },
    {
      year: '2024',
      photos: [
        { id: 101, alt: '2024: Main stage performance' },
        { id: 102, alt: '2024: Crowd enjoying music' },
        { id: 103, alt: '2024: Sunset at the beach' },
        { id: 104, alt: '2024: Local band performing' },
        { id: 105, alt: '2024: Festival food vendors' },
        { id: 106, alt: '2024: Kids zone activities' },
      ]
    },
    // To add 2026, just add another object here next year
  ];

  // Ensure years are sorted numerically descending (2025, 2024, ...)
  const years = photoGalleries.map(g => String(g.year)).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState(years[0]); // Default to most recent
  const selectedGallery = photoGalleries.find(g => String(g.year) === String(selectedYear));


  // Lightbox state
  const [lightboxImg, setLightboxImg] = useState(null);

  // Modal state for email popup
  const [showEmailModal, setShowEmailModal] = useState(false);
  const emailAddress = 'davapalooza66@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Relive the magic of past Oceanside Music Festivals</p>
          <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {years.map(yearStr => {
              const isSelected = String(selectedYear) === String(yearStr);
              return (
                <button
                  key={yearStr}
                  className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                  style={{
                    minWidth: 100,
                    fontWeight: 600,
                    borderRadius: 24,
                    border: isSelected ? '2px solid #00b3e6' : '2px solid #ccc',
                    background: isSelected ? 'var(--primary)' : 'var(--secondary)',
                    color: isSelected ? '#fff' : '#222',
                    transition: 'all 0.2s',
                  }}
                  onClick={() => setSelectedYear(String(yearStr))}
                  type="button"
                >
                  {yearStr}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery for selected year */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Block Party {selectedYear}
          </h2>
          <div className="photo-grid">
            {selectedGallery && selectedGallery.photos.length > 0 ? (
              selectedGallery.photos.map((photo) => (
                <div key={photo.id} className="photo-item">
                  {selectedYear === '2025' && photo.src ? (
                    <Image
                      src={photo.src}
                      alt={`2025 Block Party Photo ${photo.id}`}
                      width={400}
                      height={300}
                      style={{ objectFit: 'cover', borderRadius: 'inherit', width: '100%', height: '100%' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={photo.id === 1}
                    />
                  ) : (
                    <div className="photo-placeholder">
                      <span>📸</span>
                      <p>{photo.alt}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', fontSize: '1.2rem', padding: '2rem 0' }}>
                No photos available for {selectedYear} yet. Check back soon!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for 2025 images removed */}

      {/* Upload Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3>Share Your Block Party Photos!</h3>
            <p>Have amazing photos from the Block Party? We'd love to feature them in our gallery.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a
                href="https://forms.gle/iiVsdP9hdsqbqzVX6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ textDecoration: 'none' }}
              >
                Upload Photos
              </a>
              <button className="btn btn-secondary" onClick={() => setShowEmailModal(true)}>
                Email Us
              </button>
            </div>
          </div>
        </div>
        {/* Email Modal */}
        {showEmailModal && (
          <div className="modal-overlay" onClick={() => setShowEmailModal(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <h4>Contact Us</h4>
              <p style={{ margin: '1.5rem 0 1rem 0', fontSize: '1.1rem', wordBreak: 'break-all' }}>{emailAddress}</p>
              <button className="btn btn-primary" onClick={handleCopy} style={{ marginBottom: '1rem' }}>
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
              <div>
                <button className="btn btn-secondary" onClick={() => setShowEmailModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.15);
          padding: 2.5rem 2rem 1.5rem 2rem;
          min-width: 320px;
          max-width: 90vw;
          text-align: center;
          position: relative;
        }
        .modal-image {
          background: transparent;
          box-shadow: none;
          padding: 0;
          min-width: unset;
          max-width: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .photo-item {
          aspect-ratio: 4/3;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        
        .photo-item:hover {
          transform: scale(1.05);
        }
        
        .photo-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #666;
          border: 2px dashed #ddd;
        }
        
        .photo-placeholder span {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .photo-placeholder p {
          font-weight: 500;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .photo-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}