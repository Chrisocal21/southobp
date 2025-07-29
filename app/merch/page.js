'use client'
import { useState } from 'react'

export default function Merch() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Festival T-Shirt',
      price: 25,
      category: 'apparel',
      description: 'Soft cotton tee with festival logo and sunset design',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Ocean Blue', 'Sunset Orange', 'Sand Beige']
    },
    {
      id: 2,
      name: 'Music Festival Hoodie',
      price: 45,
      category: 'apparel',
      description: 'Cozy hoodie perfect for beach bonfires',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Charcoal Gray', 'Navy Blue']
    },
    {
      id: 3,
      name: 'Festival Poster 2024',
      price: 15,
      category: 'art',
      description: 'Limited edition poster featuring this year\'s artwork',
      sizes: ['18" x 24"'],
      colors: ['Full Color']
    },
    {
      id: 4,
      name: 'Oceanside Festival Hat',
      price: 22,
      category: 'accessories',
      description: 'Snapback cap with embroidered logo',
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'Khaki']
    },
    {
      id: 5,
      name: 'Reusable Water Bottle',
      price: 18,
      category: 'accessories',
      description: 'Eco-friendly steel bottle with festival design',
      sizes: ['32oz'],
      colors: ['Blue', 'Green', 'Purple']
    },
    {
      id: 6,
      name: 'Vinyl Compilation Album',
      price: 35,
      category: 'music',
      description: 'Features tracks from 2023 festival performers',
      sizes: ['12" LP'],
      colors: ['Clear Vinyl', 'Ocean Blue Vinyl']
    },
    {
      id: 7,
      name: 'Festival Sticker Pack',
      price: 8,
      category: 'accessories',
      description: 'Set of 6 waterproof stickers',
      sizes: ['Various'],
      colors: ['Multi-Color']
    },
    {
      id: 8,
      name: 'Beach Towel',
      price: 30,
      category: 'accessories',
      description: 'Large beach towel with festival artwork',
      sizes: ['30" x 60"'],
      colors: ['Tropical Sunset']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'art', name: 'Art & Posters' },
    { id: 'music', name: 'Music' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const addToCart = (product) => {
    setCart([...cart, { ...product, id: Date.now() }])
    alert(`${product.name} added to cart!`)
  }

  const getTotalItems = () => cart.length

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Festival Merchandise</h1>
          <p>Show your festival pride with official Oceanside Music Festival gear</p>
          {getTotalItems() > 0 && (
            <div className="cart-indicator">
              🛒 {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in cart
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-placeholder">
                    {product.category === 'apparel' && '👕'}
                    {product.category === 'accessories' && '🎒'}
                    {product.category === 'art' && '🎨'}
                    {product.category === 'music' && '🎵'}
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-options">
                    <div className="option-group">
                      <strong>Sizes:</strong> {product.sizes.join(', ')}
                    </div>
                    <div className="option-group">
                      <strong>Colors:</strong> {product.colors.join(', ')}
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="price">${product.price}</div>
                    <button 
                      className="btn btn-primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Benefits */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Buy Festival Merch?</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>🎵 Support Local Music</h3>
              <p>
                All proceeds from merchandise sales go directly back into supporting local musicians 
                and funding next year's festival.
              </p>
            </div>
            <div className="card">
              <h3>🌱 Sustainable Materials</h3>
              <p>
                Our apparel is made from organic cotton and recycled materials. We're committed to 
                environmental responsibility.
              </p>
            </div>
            <div className="card">
              <h3>🎨 Local Artists</h3>
              <p>
                All designs are created by local Oceanside artists, making each piece a unique work 
                of art representing our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h3>📦 Shipping & Pickup</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Free local pickup</strong> at festival merchandise booth</li>
                <li><strong>$5 flat rate shipping</strong> within California</li>
                <li><strong>$8 shipping</strong> to rest of US</li>
                <li><strong>Pre-order for festival pickup</strong> and skip the lines</li>
                <li><strong>Orders ship within 3-5 business days</strong></li>
              </ul>
            </div>
            <div className="card">
              <h3>🔄 Returns & Exchanges</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>30-day return policy</strong> on unworn items</li>
                <li><strong>Free size exchanges</strong> within 14 days</li>
                <li><strong>Festival pickup available</strong> for exchanges</li>
                <li><strong>Full refund</strong> if item is defective</li>
                <li><strong>Store credit</strong> for returns after 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Questions About Our Merch?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Need help with sizing or have a custom order request? We're here to help!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:merch@oceansidemusic.com" className="btn btn-primary">Email Us</a>
            <a href="#contact" className="btn btn-secondary">Contact Info</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cart-indicator {
          background: var(--accent-color);
          color: var(--dark-color);
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          margin-top: 1rem;
          display: inline-block;
        }
        
        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        
        .filter-btn {
          padding: 0.8rem 1.5rem;
          border: 2px solid var(--primary-color);
          background: white;
          color: var(--primary-color);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .filter-btn.active,
        .filter-btn:hover {
          background: var(--primary-color);
          color: white;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .product-card {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
        }
        
        .product-image {
          height: 200px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
        }
        
        .product-placeholder {
          font-size: 4rem;
          opacity: 0.5;
        }
        
        .product-info {
          padding: 1.5rem;
        }
        
        .product-info h3 {
          color: var(--dark-color);
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }
        
        .product-description {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        
        .product-options {
          margin-bottom: 1.5rem;
        }
        
        .option-group {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .option-group strong {
          color: var(--dark-color);
        }
        
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .price {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color);
        }
        
        .product-footer .btn {
          padding: 0.8rem 1.5rem;
        }
        
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }
          
          .product-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }
          
          .product-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}