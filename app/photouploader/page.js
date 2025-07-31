import React from 'react';

export default function PhotoUploader() {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
      <h1>Photo Uploader</h1>
      <p>
        Upload your festival photos to our Google Drive collection! By uploading, you agree that your photos become part of a free community collection and may be used by the South O Block Party for any purpose, including promotional materials, social media, and more.
      </p>
      <div style={{ margin: '2rem 0' }}>
        <div style={{ marginBottom: '1.5rem', color: '#b00', fontWeight: 500 }}>
          <p>
            <strong>Note:</strong> Google Forms cannot be embedded here due to Google security restrictions. Please use the button below to open the upload form in a new tab.
          </p>
        </div>
        <a
          href="https://forms.gle/iiVsdP9hdsqbqzVX6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary" style={{ fontSize: '1.15rem', padding: '1rem 2.5rem', marginBottom: '1.5rem' }}>
            Open Photo Upload Form
          </button>
        </a>
        <div style={{ margin: '2rem 0' }}>
          <button className="btn btn-primary" disabled style={{ opacity: 0.7, cursor: 'not-allowed' }}>
            Google Drive Upload Coming Soon
          </button>
        </div>
      </div>
      <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '2rem' }}>
        By uploading, you give up all rights to the photos and grant South O Block Party the right to use them freely.
      </p>
    </div>
  );
}
