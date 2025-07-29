export const metadata = {
  title: 'Photo Gallery - Oceanside Music Festival',
  description: 'View photos from past Oceanside Community Music Festival events',
}

export default function Gallery() {
  // Demo photo data - replace with actual photos
  const photoGalleries = [
    {
      year: '2023',
      photos: [
        { id: 1, alt: 'Main stage performance' },
        { id: 2, alt: 'Crowd enjoying music' },
        { id: 3, alt: 'Sunset at the beach' },
        { id: 4, alt: 'Local band performing' },
        { id: 5, alt: 'Festival food vendors' },
        { id: 6, alt: 'Kids zone activities' },
      ]
    },
    {
      year: '2022',
      photos: [
        { id: 7, alt: 'Acoustic stage' },
        { id: 8, alt: 'Beach volleyball' },
        { id: 9, alt: 'Art installations' },
        { id: 10, alt: 'Community volunteers' },
      ]
    }
  ]

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Relive the magic of past Oceanside Music Festivals</p>
        </div>
      </section>

      {/* Gallery by Year */}
      {photoGalleries.map((gallery) => (
        <section key={gallery.year} className="section">
          <div className="container">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
              Festival {gallery.year}
            </h2>
            <div className="photo-grid">
              {gallery.photos.map((photo) => (
                <div key={photo.id} className="photo-item">
                  <div className="photo-placeholder">
                    <span>📸</span>
                    <p>{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Upload Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3>Share Your Festival Photos!</h3>
            <p>Have amazing photos from the festival? We'd love to feature them in our gallery.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <button className="btn btn-primary">Upload Photos</button>
              <a href="mailto:photos@oceansidemusic.com" className="btn btn-secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
  )
}