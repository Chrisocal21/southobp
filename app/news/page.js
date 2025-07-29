
'use client'

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Lineup Announcement: Headliners Revealed!',
      date: '2024-06-15',
      category: 'Lineup',
      excerpt: 'We\'re thrilled to announce our 2024 headliners including The Sunset Collective and Electric Tides, plus 35+ more amazing artists.',
      content: `
        The wait is over! We're excited to reveal the incredible lineup for the 2024 Oceanside Community Music Festival. This year's headliners represent the best of both local talent and touring acts.

        Saturday night will feature The Sunset Collective, the indie rock sensation that's been taking California by storm. Their blend of surf-inspired melodies and introspective lyrics perfectly captures the Oceanside spirit.

        Sunday's main stage will be closed by Electric Tides, whose electronic-infused soundscapes have earned them spots at major festivals across the West Coast. Their live show promises to be an unforgettable audio-visual experience against the backdrop of our beautiful Pacific sunset.

        Beyond our headliners, we're featuring over 35 additional artists across three stages, with a special focus on local musicians who make our community's music scene so vibrant.
      `,
      featured: true
    },
    {
      id: 2,
      title: 'Early Bird Tickets Now Available',
      date: '2024-06-10',
      category: 'Tickets',
      excerpt: 'Get your festival passes at the lowest price of the year. Early bird pricing ends July 1st.',
      content: `
        Early bird tickets for the 2024 Oceanside Community Music Festival are now live! This is your chance to secure your spot at the best price of the year.

        Early bird pricing:
        - Single day passes: $45 (regular $55)
        - Weekend passes: $75 (regular $95)
        - VIP weekend: $110 (regular $125)

        All tickets include access to all three stages, the family zone, and our expanded food vendor area. VIP passes include premium viewing areas, dedicated bathrooms, and complimentary welcome drinks.

        Early bird pricing is limited and ends on July 1st, so don't wait!
      `,
      featured: false
    },
    {
      id: 3,
      title: 'Sustainability Initiative: Going Zero Waste',
      date: '2024-06-05',
      category: 'Community',
      excerpt: 'Our commitment to environmental responsibility includes compostable materials, solar power, and zero single-use plastics.',
      content: `
        We're proud to announce that the 2024 Oceanside Community Music Festival will be our first zero-waste event. This initiative reflects our commitment to protecting the beautiful coastal environment that makes our festival so special.

        Key sustainability measures:
        - 100% renewable energy from solar panels
        - Compostable plates, cups, and utensils only
        - No single-use plastic bottles (water refill stations provided)
        - Comprehensive recycling and composting program
        - Bicycle valet parking to encourage eco-friendly transportation

        We're partnering with local environmental groups to ensure every aspect of our festival supports ocean and coastal conservation.
      `,
      featured: false
    },
    {
      id: 4,
      title: 'Local Business Spotlight: Festival Food Vendors',
      date: '2024-05-28',
      category: 'Community',
      excerpt: 'Meet the amazing local restaurants and food trucks that will be feeding festival-goers this year.',
      content: `
        Food is a huge part of the festival experience, and we're excited to feature some of Oceanside's best local eateries alongside specialty food trucks from across North County.

        This year's food vendors include:
        - Sunrise Breakfast Burritos (local favorite)
        - Coastal Kitchen (farm-to-table fresh plates)
        - The Taco Libre truck (authentic Mexican street food)
        - Pacific Poke (fresh Hawaiian-style bowls)
        - Sweet Treats ice cream (perfect for beach weather)

        Plus several more! All vendors have committed to using compostable packaging as part of our sustainability initiative.
      `,
      featured: false
    },
    {
      id: 5,
      title: 'Volunteer Appreciation: Meet Our Amazing Team',
      date: '2024-05-20',
      category: 'Volunteers',
      excerpt: 'Behind every great festival are incredible volunteers. Learn about the people who make our festival possible.',
      content: `
        The Oceanside Community Music Festival wouldn't be possible without our amazing volunteer team. These dedicated community members donate their time to help create an unforgettable experience for everyone.

        This year, we have over 150 volunteers signed up across all departments - from stage crew to guest services to environmental stewardship. Many of our volunteers return year after year, becoming an integral part of our festival family.

        Special thanks to our volunteer coordinators who help organize training sessions and ensure everyone has a great experience while contributing to the festival's success.

        Interested in volunteering? It's not too late to join our team!
      `,
      featured: false
    },
    {
      id: 6,
      title: 'Artist Spotlight: Ocean Waves Returns Home',
      date: '2024-05-15',
      category: 'Artists',
      excerpt: 'Local surf rock band Ocean Waves brings their national tour back to Oceanside for a special homecoming performance.',
      content: `
        We're thrilled to welcome home Ocean Waves, the Oceanside-born surf rock band that's been touring nationally since their breakthrough album "Tidal Shift" last year.

        The band, formed by childhood friends who grew up surfing these very beaches, brings their signature sound that perfectly captures the laid-back yet energetic vibe of coastal California life.

        "Playing at home is always special," says lead guitarist Mike Santos. "This festival represents everything we love about our community - great music, amazing people, and that perfect Oceanside sunset."

        Ocean Waves will perform on the main stage Saturday evening, just before headliners The Sunset Collective take the stage.
      `,
      featured: false
    }
  ]

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Lineup': return 'var(--primary-color)'
      case 'Tickets': return 'var(--secondary-color)'
      case 'Community': return 'var(--accent-color)'
      case 'Volunteers': return '#6c757d'
      case 'Artists': return '#e74c3c'
      default: return 'var(--dark-color)'
    }
  }

  const featuredArticle = newsArticles.find(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Festival News</h1>
          <p>Stay up to date with the latest festival announcements and community updates</p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section">
          <div className="container">
            <div className="featured-article">
              <div className="featured-badge">Featured Story</div>
              <div className="article-category" style={{ backgroundColor: getCategoryColor(featuredArticle.category) }}>
                {featuredArticle.category}
              </div>
              <h2>{featuredArticle.title}</h2>
              <div className="article-meta">
                <span className="article-date">{formatDate(featuredArticle.date)}</span>
              </div>
              <p className="article-excerpt">{featuredArticle.excerpt}</p>
              <div className="article-content">
                {featuredArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>More News</h2>
          <div className="articles-grid">
            {regularArticles.map((article) => (
              <article key={article.id} className="news-card">
                <div className="article-category" style={{ backgroundColor: getCategoryColor(article.category) }}>
                  {article.category}
                </div>
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span className="article-date">{formatDate(article.date)}</span>
                </div>
                <p className="article-excerpt">{article.excerpt}</p>
                <button className="read-more-btn">Read Full Article</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section">
        <div className="container">
          <div className="newsletter-signup">
            <div className="newsletter-content">
              <h2>Stay in the Loop</h2>
              <p>
                Get the latest festival news, artist announcements, and exclusive updates 
                delivered straight to your inbox.
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
              <p className="newsletter-disclaimer">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Follow Us</h2>
          <div className="social-grid">
            <div className="social-card">
              <div className="social-icon">📘</div>
              <h3>Facebook</h3>
              <p>Daily updates and community discussions</p>
              <a href="#" className="btn btn-secondary">Follow</a>
            </div>
            <div className="social-card">
              <div className="social-icon">📷</div>
              <h3>Instagram</h3>
              <p>Behind-the-scenes photos and artist spotlights</p>
              <a href="#" className="btn btn-secondary">Follow</a>
            </div>
            <div className="social-card">
              <div className="social-icon">🐦</div>
              <h3>Twitter</h3>
              <p>Real-time updates and festival announcements</p>
              <a href="#" className="btn btn-secondary">Follow</a>
            </div>
            <div className="social-card">
              <div className="social-icon">🎬</div>
              <h3>TikTok</h3>
              <p>Fun videos and artist performances</p>
              <a href="#" className="btn btn-secondary">Follow</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .featured-article {
          background: white;
          padding: 3rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .featured-badge {
          position: absolute;
          top: -12px;
          left: 3rem;
          background: var(--gradient);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .article-category {
          display: inline-block;
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .featured-article h2 {
          color: var(--dark-color);
          margin-bottom: 1rem;
          font-size: 2.2rem;
        }
        
        .article-meta {
          margin-bottom: 1.5rem;
          color: #666;
        }
        
        .article-date {
          font-weight: 500;
        }
        
        .article-excerpt {
          font-size: 1.2rem;
          color: #555;
          font-weight: 500;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .article-content {
          line-height: 1.8;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
          color: #444;
        }
        
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .news-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
        }
        
        .news-card:hover {
          transform: translateY(-5px);
        }
        
        .news-card h3 {
          color: var(--dark-color);
          margin-bottom: 1rem;
          font-size: 1.3rem;
          line-height: 1.3;
        }
        
        .news-card .article-excerpt {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .read-more-btn {
          background: none;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .read-more-btn:hover {
          background: var(--primary-color);
          color: white;
        }
        
        .newsletter-signup {
          background: var(--gradient);
          color: white;
          padding: 4rem 3rem;
          border-radius: var(--border-radius);
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .newsletter-content h2 {
          color: white;
          margin-bottom: 1rem;
        }
        
        .newsletter-content p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        
        .newsletter-form {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .newsletter-input {
          flex: 1;
          min-width: 250px;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
        }
        
        .newsletter-input:focus {
          outline: 2px solid white;
        }
        
        .newsletter-form .btn {
          white-space: nowrap;
        }
        
        .newsletter-disclaimer {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .social-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          text-align: center;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
        }
        
        .social-card:hover {
          transform: translateY(-5px);
        }
        
        .social-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .social-card h3 {
          color: var(--dark-color);
          margin-bottom: 1rem;
        }
        
        .social-card p {
          color: #666;
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .featured-article {
            padding: 2rem 1.5rem;
          }
          
          .featured-badge {
            left: 1.5rem;
          }
          
          .articles-grid {
            grid-template-columns: 1fr;
          }
          
          .newsletter-signup {
            padding: 3rem 2rem;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .newsletter-input {
            min-width: auto;
          }
        }
      `}</style>
    </>
  )
}