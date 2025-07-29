'use client'
import { useState } from 'react'

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: [],
    tshirtSize: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        availability: checked 
          ? [...prev.availability, value]
          : prev.availability.filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for signing up to volunteer! We\'ll be in touch soon.')
    // In a real app, this would submit to a backend
  }

  const volunteerRoles = [
    {
      title: 'Stage Crew',
      icon: '🎤',
      description: 'Help set up equipment, assist artists, and ensure smooth stage transitions.',
      timeCommitment: '6-8 hours',
      perks: ['Backstage access', 'Artist meet & greets', 'Free festival t-shirt']
    },
    {
      title: 'Guest Services',
      icon: '🎟️',
      description: 'Welcome attendees, check tickets, and provide information about the festival.',
      timeCommitment: '4-6 hours',
      perks: ['Festival entrance', 'Volunteer meal', 'Great networking']
    },
    {
      title: 'Vendor Support',
      icon: '🍕',
      description: 'Assist food vendors and merchandise booths with setup and customer service.',
      timeCommitment: '4-6 hours',
      perks: ['Free meals', 'Vendor discounts', 'Fun team environment']
    },
    {
      title: 'Cleanup Crew',
      icon: '♻️',
      description: 'Help keep the festival green by managing recycling and cleanup efforts.',
      timeCommitment: '3-4 hours',
      perks: ['Environmental impact', 'Community service hours', 'Post-festival party']
    },
    {
      title: 'Photography',
      icon: '📸',
      description: 'Capture the magic of the festival and help document this amazing community event.',
      timeCommitment: '6-8 hours',
      perks: ['Photo credit', 'Press access', 'Equipment provided']
    },
    {
      title: 'Family Zone',
      icon: '🎈',
      description: 'Organize activities for kids and families in our dedicated family-friendly area.',
      timeCommitment: '4-6 hours',
      perks: ['Work with kids', 'Creative activities', 'Family-friendly schedule']
    }
  ]

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Volunteer With Us</h1>
          <p>Be part of the magic - help create an unforgettable festival experience</p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2>Why Volunteer?</h2>
              <p>
                Volunteering at the Oceanside Music Festival is more than just helping out - it's about 
                being part of a community that celebrates music, creativity, and connection.
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                <li>🎵 <strong>Free festival access</strong> - Enjoy the music while you help</li>
                <li>🍕 <strong>Meals provided</strong> - We'll keep you fed and happy</li>
                <li>👕 <strong>Official volunteer t-shirt</strong> - Show your festival pride</li>
                <li>🤝 <strong>Meet amazing people</strong> - Build lasting friendships</li>
                <li>🌟 <strong>Gain experience</strong> - Learn event production skills</li>
                <li>❤️ <strong>Give back</strong> - Support your local music community</li>
              </ul>
            </div>
            <div className="volunteer-image">
              <div style={{ 
                background: 'var(--gradient)', 
                height: '300px', 
                borderRadius: 'var(--border-radius)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '4rem'
              }}>
                🙋‍♀️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Volunteer Opportunities</h2>
          <div className="grid grid-3">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="card volunteer-role">
                <div className="role-icon">{role.icon}</div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <div className="role-details">
                  <p><strong>Time Commitment:</strong> {role.timeCommitment}</p>
                  <div className="perks">
                    <strong>Perks:</strong>
                    <ul>
                      {role.perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Sign Up to Volunteer</h2>
            <div className="card">
              <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="role">Preferred Volunteer Role *</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a role...</option>
                      {volunteerRoles.map((role, index) => (
                        <option key={index} value={role.title}>{role.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Availability *</label>
                  <div className="checkbox-group">
                    {['Saturday Setup (July 14)', 'Saturday Event (July 15)', 'Sunday Event (July 16)', 'Sunday Cleanup (July 16)'].map((option) => (
                      <label key={option} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="availability"
                          value={option}
                          checked={formData.availability.includes(option)}
                          onChange={handleInputChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tshirtSize">T-Shirt Size</label>
                    <select
                      id="tshirtSize"
                      name="tshirtSize"
                      value={formData.tshirtSize}
                      onChange={handleInputChange}
                    >
                      <option value="">Select size...</option>
                      <option value="XS">XS</option>
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Previous Event/Volunteer Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about any relevant experience you have..."
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Sign Me Up!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .volunteer-role {
          text-align: center;
        }
        
        .role-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .role-details {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
          text-align: left;
        }
        
        .perks ul {
          margin-top: 0.5rem;
          padding-left: 1.2rem;
        }
        
        .perks li {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.3rem;
        }
        
        .volunteer-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-row {
          display: flex;
          gap: 1rem;
        }
        
        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--dark-color);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.8rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: normal !important;
          cursor: pointer;
        }
        
        .checkbox-label input[type="checkbox"] {
          width: auto;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}