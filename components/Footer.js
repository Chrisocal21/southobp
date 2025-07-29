import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🎵 Oceanside Festival</h3>
            <p>Bringing amazing music and community together in beautiful Oceanside, California.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/lineup">Lineup</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/merch">Merch</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 Oceanside, CA</p>
            <p>📧 info@oceansidemusic.com</p>
            <p>📞 (760) 555-MUSIC</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Oceanside Community Music Festival. All rights reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--dark-color);
          color: white;
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          color: var(--accent-color);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .footer-section h4 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }
        
        .footer-section p {
          color: #bbb;
          line-height: 1.6;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: var(--primary-color);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .social-links a:hover {
          transform: scale(1.2);
        }
        
        .footer-bottom {
          border-top: 1px solid #444;
          padding-top: 2rem;
          text-align: center;
          color: #888;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  )
}