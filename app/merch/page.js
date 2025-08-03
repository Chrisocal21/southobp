'use client'
import { useState } from 'react'

export default function Merch() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImg, setLightboxImg] = useState(null)

  const products = [
    {
      id: 1,
      name: 'OG Block Party Tee',
      price: 25,
      category: 'apparel',
      description: 'Soft cotton t-shirt with the original South O Block Party logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Ocean Blue', 'White', 'Black'],
      image: '/assets/images/merch/classic-sobp-t-shirt.png'
    },
    {
      id: 2,
      name: 'OG Block Party Tank',
      price: 28,
      category: 'apparel',
      description: 'Tank top with the original South O Block Party logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Sunset Orange', 'Sand'],
      image: '/assets/images/merch/classic-sobp-tank.png'
    },
    {
      id: 3,
      name: 'OG Block Party Sweater',
      price: 30,
      category: 'apparel',
      description: 'Sweater with the original South O Block Party logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Heather Gray', 'Navy'],
      image: '/assets/images/merch/classic-sobp-sweater.png'
    },
    {
      id: 4,
      name: 'OG Block Party Snapback Trucker Hat',
      price: 22,
      category: 'accessories',
      description: 'Snapback hat with the original South O Block Party logo.',
      sizes: ['One Size'],
      colors: ['Black', 'Navy'],
      images: [
        '/assets/images/merch/classic-sobp-trucker.png',
        '/assets/images/merch/classic-sobp-trucker2.png' // Add your second image here
      ]
    },
    {
      id: 5,
      name: 'OG Block Party Dad Hat',
      price: 20,
      category: 'accessories',
      description: 'Dad hat with the original South O Block Party logo.',
      sizes: ['One Size'],
      colors: ['Khaki', 'Light Blue'],
      image: '/assets/images/merch/classic-sobp-dad.png'
    },
    {
      id: 6,
      name: 'OG Block Party Tote Bag',
      price: 40,
      category: 'apparel',
      description: 'Cozy crewneck sweatshirt with the original South O Block Party logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Forest Green', 'Gray'],
      image: '/assets/images/merch/classic-sobp-tote.png'
    },
    {
      id: 7,
      name: 'OG Block Party Zip Hoodie',
      price: 45,
      category: 'apparel',
      description: 'Zip-up hoodie  with the original South O Block Party logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Charcoal', 'Sunset Orange'],
      image: '/assets/images/merch/classic-sobp-zipuphoodie.png'
    },
    {
      id: 8,
      name: 'OG Block Party Pullover Hoodie',
      price: 42,
      category: 'apparel',
      description: 'Classic pullover sweatshirt  with the original South O Block Party logo.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy', 'Heather Gray'],
      image: '/assets/images/merch/classic-sobp-pulloverhoodie.png'
    },
    {
      id: 9,
      name: 'OG Block Party Sticker',
      price: 3,
      category: 'accessories',
      description: 'Vinyl sticker with the South O Block Party logo.',
      sizes: ['3" x 3"'],
      colors: ['Full Color'],
      image: '/assets/images/merch/classic-sobp-sticker.png'
    },
    {
      id: 10,
      name: 'OG Block Party Patch',
      price: 3,
      category: 'accessories',
      description: 'Vinyl patch featuring a wave and sun design.',
      sizes: ['3" x 3"'],
      colors: ['Full Color'],
      image: '/assets/images/merch/classic-sobp-patch.png'
    },
    {
      id: 11,
      name: 'OGKeychain Bottle Opener',
      price: 5,
      category: 'accessories',
      description: 'Handy keychain bottle opener with South O Block Party branding.',
      sizes: ['One Size'],
      colors: ['Silver'],
      image: '/assets/images/merch/classic-sobp-kbo.png'
    },
    {
      id: 12,
      name: 'OG Block Party Koozie',
      price: 5,
      category: 'accessories',
      description: 'Keep your drink cold with a South O Block Party koozie.',
      sizes: ['One Size'],
      colors: ['Blue', 'Black'],
      image: '/assets/images/merch/classic-sobp-koozie.png'
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

  // Track current image index for products with multiple images
  const [imageIndexes, setImageIndexes] = useState({})

  const addToCart = (product) => {
    setCart([...cart, { ...product, id: Date.now() }])
    alert(`${product.name} added to cart!`)
  }

  const handleImageArrow = (productId, direction, imagesLength) => {
    setImageIndexes(prev => {
      const current = prev[productId] || 0
      let next = direction === 'next' ? current + 1 : current - 1
      if (next < 0) next = imagesLength - 1
      if (next >= imagesLength) next = 0
      return { ...prev, [productId]: next }
    })
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
            {filteredProducts.map((product) => {
              // Support multiple images for Snapback Trucker Hat
              const hasMultipleImages = Array.isArray(product.images)
              const images = hasMultipleImages ? product.images : [product.image]
              const currentImgIdx = imageIndexes[product.id] || 0
              const currentImg = images[currentImgIdx]
              return (
                <div key={product.id} className="product-card">
                  <div
                    className="product-image"
                    style={product.id === 1 ? { height: '260px', background: '#e9ecef' } : {}}
                  >
                    {currentImg ? (
                      <>
                        <img
                          src={currentImg}
                          alt={product.name}
                          className={product.id === 1 ? 'product-img-fit product-img-large product-img-collar' : 'product-img-fit'}
                          onClick={() => setLightboxImg(currentImg)}
                          style={{ cursor: 'pointer' }}
                        />
                        {hasMultipleImages && (
                          <div className="image-arrows">
                            <button
                              className="arrow-btn"
                              aria-label="Previous image"
                              onClick={e => { e.stopPropagation(); handleImageArrow(product.id, 'prev', images.length) }}
                            >&#8592;</button>
                            <button
                              className="arrow-btn"
                              aria-label="Next image"
                              onClick={e => { e.stopPropagation(); handleImageArrow(product.id, 'next', images.length) }}
                            >&#8594;</button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="coming-soon-badge">Coming Soon</div>
                    )}
                  </div>
                  {lightboxImg && (
                    <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
                      <img src={lightboxImg} alt="Full Size Merch" className="lightbox-img" />
                      <button className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</button>
                    </div>
                  )}
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
                      <div className="price">TBA</div>
                      <button 
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
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
        .image-arrows {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }
        .arrow-btn {
          background: rgba(255,255,255,0.85);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          margin: 0 8px;
          pointer-events: auto;
          transition: background 0.2s;
        }
        .arrow-btn:hover {
          background: #ffe066;
        }
        .coming-soon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(90deg, #ffb347 0%, #ffcc33 100%);
          color: #222;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 20px;
          padding: 0.5rem 1.2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          margin: 0 auto;
          margin-top: 60px;
          width: fit-content;
        }
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
          height: 280px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
          padding: 0.5rem;
          overflow: hidden;
          position: relative;
        }
        .product-img-fit {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          background: #f9f9f9;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          display: block;
          transition: box-shadow 0.2s;
        }
        .product-img-fit:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }
        .product-img-large {
          max-height: 300px;
        }
        .product-img-collar {
          object-position: center -90px;
        }

        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .lightbox-img {
          max-width: 90vw;
          max-height: 80vh;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          background: #fff;
        }
        .lightbox-close {
          position: absolute;
          top: 32px;
          right: 48px;
          font-size: 2.5rem;
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }
        @media (max-width: 600px) {
          .lightbox-img {
            max-width: 98vw;
            max-height: 60vh;
          }
          .lightbox-close {
            top: 12px;
            right: 18px;
            font-size: 2rem;
          }
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