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
          <p>Be part of the magic—help create an unforgettable South O Block Party experience for everyone!</p>
        </div>
      </section>
      <main>
        <div className="grid grid-3 volunteer-opps-grid">
          <div className="card volunteer-role" style={{ gridColumn: '1 / -1', background: '#f8f9fa', border: '1.5px solid #e0e0e0', padding: '2rem 2.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color, #1a4d2e)' }}>🌞 Volunteer at the South O Block Party</h3>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>Lend a hand. Share the vibes. Make memories.</p>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>The South O Block Party doesn’t happen without good people stepping up. If you’ve got some time, positive energy, and a love for this community — we want you on the team.</p>
          </div>
          <div className="card volunteer-role" style={{ gridColumn: '1 / -1', background: '#f8f9fa', border: '1.5px solid #e0e0e0', padding: '2rem 2.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color, #1a4d2e)' }}>🙋‍♀️ Why Volunteer?</h3>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>Volunteers are the heartbeat of South O. From setup to cleanup, stage support to booth help, every task makes a difference. You're not just filling a spot — you're helping bring the whole thing to life.</p>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>And we mean it when we say thank you. Giving your time is a big deal, and we appreciate every minute of it.</p>
          </div>
          <div className="card volunteer-role" style={{ gridColumn: '1 / -1', background: '#f8f9fa', border: '1.5px solid #e0e0e0', padding: '2rem 2.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color, #1a4d2e)' }}>Here’s what you’ll get for stepping up:</h3>
            <ul style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem', listStyle: 'none', paddingLeft: 0 }}>
              <li>🎟️ Free access to the party while you volunteer</li>
              <li>👕 An official South O Volunteer T-Shirt</li>
              <li>🤝 New friends, and great convos</li>
              <li>🌊 A chance to give back to the place we call home</li>
            </ul>
          </div>
          <div className="card volunteer-role" style={{ gridColumn: '1 / -1', background: '#f8f9fa', border: '1.5px solid #e0e0e0', padding: '2rem 2.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color, #1a4d2e)' }}>🛠️ How You’ll Help</h3>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>We’ll plug you into a role where help is most needed. Tasks could include:</p>
            <ul style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', marginBottom: '0.7rem', columns: 2, maxWidth: '700px' }}>
              <li>Event setup or takedown</li>
              <li>Supporting vendors, artists, or musicians</li>
              <li>Helping with BBQ or food stations</li>
              <li>Guiding traffic or guests</li>
              <li>Keeping things tidy during or after the event</li>
              <li>General “jump in where needed” energy</li>
            </ul>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>You don’t need experience — just a solid attitude and a willingness to help.</p>
          </div>
          <div className="card volunteer-role" style={{ gridColumn: '1 / -1', background: '#f8f9fa', border: '1.5px solid #e0e0e0', padding: '2rem 2.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color, #1a4d2e)' }}>⏰ Shift Options</h3>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>We’ve got two main shifts:</p>
            <ul style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', marginBottom: '0.7rem', listStyle: 'none', paddingLeft: 0 }}>
              <li><strong>Morning (AM)</strong> — Help us set up and kick off the day</li>
              <li><strong>Evening (PM)</strong> — Close out the party and help clean up</li>
            </ul>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>You can let us know your preference in the volunteer form.</p>
          </div>
          <div className="card volunteer-role" style={{ gridColumn: '1 / -1', background: '#f8f9fa', border: '1.5px solid #e0e0e0', padding: '2rem 2.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color, #1a4d2e)' }}>⚠️ Limited Volunteer Spots</h3>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>We’ve only got a certain number of volunteer spots available. If you’re interested, don’t wait — they fill up fast.</p>
          </div>
          <div className="card volunteer-role" style={{ gridColumn: '1 / -1', background: '#f8f9fa', border: '1.5px solid #e0e0e0', padding: '2rem 2.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color, #1a4d2e)' }}>💬 Got Questions?</h3>
            <p style={{ fontSize: '1.13rem', color: '#444', marginBottom: '0.7rem' }}>If you're unsure about anything or want to get in touch, use the Google Form (same one as the sign-up). There’s a space there for questions — we’ll get back to you!</p>
            <a
              href="https://forms.gle/PJDFegBR7jDZbSsr9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary volunteer-signup-btn"
              style={{ marginTop: '1.2rem' }}
            >
              Go to Volunteer Sign Up Form
            </a>
          </div>
        </div>
      </main>
      <style jsx>{`
        .volunteer-wrap {
          position: relative;
          width: 100%;
          min-height: 320px;
        }
        .volunteer-float {
          float: right;
          margin-left: 2.5rem;
          margin-bottom: 1.5rem;
          width: 320px;
          max-width: 45vw;
        }
        .volunteer-emoji-box {
          background: var(--gradient);
          height: 300px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 4rem;
        }
        @media (max-width: 900px) {
          .volunteer-float {
            float: none;
            margin: 0 auto 2rem auto;
            display: block;
            width: 100%;
            max-width: 100%;
          }
          .volunteer-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        .volunteer-signup-btn {
          display: inline-block;
          padding: 1rem 2.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          border-radius: 8px;
          margin-top: 1.5rem;
          background: var(--primary-gradient, var(--primary-color));
          color: #fff;
          text-decoration: none;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .volunteer-signup-btn:hover {
          background: var(--primary-color-dark, #1a4d2e);
          box-shadow: 0 4px 18px rgba(0,0,0,0.13);
        }
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