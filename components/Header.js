'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/lineup', label: 'Lineup' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/merch', label: 'Merch' },
    { href: '/news', label: 'News' },
    { href: '/donate', label: 'Donate' },
  ]

  return (
    <header className="header">
      <nav className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <h2>🎵 Oceanside Festival</h2>
          </Link>
          
          <div className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'nav-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      <style jsx>{`
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 107, 53, 0.1);
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        
        .logo h2 {
          color: var(--primary-color);
          margin: 0;
          font-size: 1.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          color: var(--dark-color);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: var(--primary-color);
        }
        
        .nav-link.nav-active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient);
          border-radius: 1px;
        }
        
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--primary-color);
          margin: 3px 0;
          border-radius: 2px;
          transition: 0.3s;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 999;
          }
          
          .nav-links.nav-open {
            transform: translateY(0);
            opacity: 1;
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
          
          .logo h2 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </header>
  )
}