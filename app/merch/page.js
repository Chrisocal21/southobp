'use client'
import { useState } from 'react'

export default function Merch() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Classic South O Tee',
      price: 25,
      category: 'apparel',
      description: 'Soft cotton t-shirt with the classic South O Block Party logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Ocean Blue', 'White', 'Black']
    },
    {
      id: 2,
      name: 'Sunset Wave Tee',
      price: 28,
      category: 'apparel',
      description: 'Limited edition tee featuring a sunset wave design by a local artist.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Sunset Orange', 'Sand']
    },
    {
      id: 3,
      name: 'Vintage Block Party Tee',
      price: 30,
      category: 'apparel',
      description: 'Throwback style t-shirt with vintage South O graphics.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Heather Gray', 'Navy']
    },
    {
      id: 4,
      name: 'South O Snapback Hat',
      price: 22,
      category: 'accessories',
      description: 'Snapback hat with embroidered South O Block Party logo.',
      sizes: ['One Size'],
      colors: ['Black', 'Navy']
    },
    {
      id: 5,
      name: 'Festival Dad Hat',
      price: 20,
      category: 'accessories',
      description: 'Relaxed fit dad hat with a small South O patch.',
      sizes: ['One Size'],
      colors: ['Khaki', 'Light Blue']
    },
    {
      id: 6,
      name: 'Block Party Crewneck',
      price: 40,
      category: 'apparel',
      description: 'Cozy crewneck sweatshirt with bold South O print.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Forest Green', 'Gray']
    },
    {
      id: 7,
      name: 'Sunset Zip Hoodie',
      price: 45,
      category: 'apparel',
      description: 'Zip-up hoodie with a sunset back print and small chest logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Charcoal', 'Sunset Orange']
    },
    {
      id: 8,
      name: 'Classic Pullover Hoodie',
      price: 42,
      category: 'apparel',
      description: 'Classic pullover sweatshirt with South O Block Party chest print.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy', 'Heather Gray']
    },
    {
      id: 9,
      name: 'South O Sticker',
      price: 3,
      category: 'accessories',
      description: 'Vinyl sticker with the South O Block Party logo.',
      sizes: ['3" x 3"'],
      colors: ['Full Color']
    },
    {
      id: 10,
      name: 'Wave Sticker',
      price: 3,
      category: 'accessories',
      description: 'Vinyl sticker featuring a wave and sun design.',
      sizes: ['3" x 3"'],
      colors: ['Full Color']
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
          <h1>South O Block Party Merch 🎉</h1>
          <p style={{ fontSize: '1.1rem', margin: '1.5rem 0 1rem 0', color: '#444' }}>
            Buy local. Support the party. All proceeds fund the South O Block Party.
          </p>
          <div style={{ fontSize: '1.05rem', color: '#333', marginBottom: '1.2rem' }}>
            <strong>Available:</strong> T-Shirts, Sweatshirts, Hats
          </div>
          <div style={{ fontWeight: 600, color: 'var(--primary-color)', marginBottom: '1.2rem', fontSize: '1.05rem' }}>
             100% of sales go back to the event.
          </div>
          <div style={{ fontSize: '1.05rem', color: '#444', marginBottom: '1.2rem' }}>
            Limited-edition merch drops at the party—get yours at the booth!
          </div>
          {getTotalItems() > 0 && (
            <div className="cart-indicator" style={{ marginTop: '2rem' }}>
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
                            <h3>🔄 Returns & Exchanges</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>All sales are final.</strong></li>
                <li>No returns or refunds except for defective items.</li>
                <li>Free size exchanges available at the festival booth (while supplies last).</li>
              </ul>
              <div style={{ color: '#b94a48', fontWeight: 600, marginTop: '0.7rem' }}>
                Please double-check your order before purchasing. If you have an issue with a defective item, contact us at the event.
              </div>
            </div>
            <div className="card">
              <h3>📦 Shipping & Pickup</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Free local pickup</strong> at the block party merch booth</li>
                <li><strong>Shipping cost depends on what you order</strong> (calculated at checkout or by request)</li>
                <li><strong>Pre-order for block party pickup</strong> and skip the lines</li>
                <li><strong>Orders ship within 3-5 business days</strong> (unless otherwise noted)</li>
              </ul>
              <div style={{ color: '#555', fontSize: '0.98rem', marginTop: '0.7rem' }}>
                Shipping rates and options may vary depending on the item(s) purchased. If you have questions, please ask at the merch booth or email us.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Message */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Your Merch, Your Community</h2>
          <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: '1.7' }}>
            Every shirt, hat, sweatshirt and sticker you buy helps keep the South O Block Party going strong. We appreciate your support—see you at the party!
          </p>
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