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

      {/* Why Volunteer */}
      <section className="section">
        <div className="container">
          <div className="volunteer-wrap">
            <div className="volunteer-image volunteer-float">
              <div className="volunteer-emoji-box">
                🙋‍♀️
              </div>
            </div>
            <div>
              <h2>Why Volunteer?</h2>
              <p>
                The South O Block Party is powered by the heart and hustle of our volunteers. Whether you’re helping set up tents, running food, answering questions, or just spreading good vibes, you’ll be part of a team that makes the event possible.
              </p>
              <p>
                Volunteering is about giving a little time and a lot of spirit—either showing up early to help us get the party started, or staying late to help us leave the space better than we found it. There’s a role for everyone, and every helping hand makes a difference.
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
                <li>🎵 <strong>Free festival access</strong> – Enjoy the music while you help</li>
                <li>👕 <strong>Official volunteer t-shirt</strong> – Stand out as a Block Party hero</li>
                <li>🤝 <strong>Meet awesome people</strong> – Make new friends and connections</li>
                <li>🌟 <strong>Give back</strong> – Support your local community in a meaningful way</li>
                <li>AM Shift – Help us get the party off the ground</li>
                <li>PM Shift – Help us wrap it all up and celebrate a job well done</li>
              </ul>
              <p>
                This is a volunteer position (not paid)—but it’s a position of pride. You’ll be part of the team in official South O Block Party shirts, ready to help guests, vendors, and artists, and keep the good times rolling.
              </p>
              <p>
                Whether you’re here for the music, the art, the community, or just love being involved, we’d love to have you on board. Fill out the form below and we’ll reach out with more details and shift preferences. Let’s build something great—together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Volunteer Opportunities</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '2.5rem', fontSize: '1.15rem', color: '#444', lineHeight: '1.7' }}>
            <p>Thank you for your interest in volunteering at the South O Block Party! This event is powered by the community—and we couldn’t do it without folks like you.</p>
            <p>As a volunteer, you’ll help set the stage or close things out by either assisting in the <strong>AM shift (setup)</strong> or <strong>PM shift (cleanup)</strong>. You might help with equipment, directing guests, supporting vendors, or just lending a hand where needed. Volunteers will wear official South O Block Party shirts and be the friendly faces of the event.</p>
            <p>Please fill out the info below so we can get you set up with a shift, a shirt, and a role that suits you. We’ll be in touch soon!</p>
          </div>
          <div className="grid grid-3 volunteer-opps-grid">
            <div className="card volunteer-role"><h3>AM Shift</h3><p>Help us get the party off the ground! Set up tents, equipment, signage, and more.</p></div>
            <div className="card volunteer-role"><h3>PM Shift</h3><p>Help us wrap it all up and leave the space better than we found it. Cleanup, breakdown, and support.</p></div>
            <div className="card volunteer-role"><h3>Full Day</h3><p>Want to be part of it all? Join us for both AM and PM shifts!</p></div>
            <div className="card volunteer-role"><h3>Event Setup</h3><p>Assist with setting up tents, tables, signage, and sound equipment before the event starts.</p></div>
            <div className="card volunteer-role"><h3>Event Cleanup</h3><p>Help with post-event breakdown, trash/recycling, and making sure we leave the space spotless.</p></div>
            <div className="card volunteer-role"><h3>Booth Assistance</h3><p>Support vendors and community booths with setup, customer service, and logistics.</p></div>
            <div className="card volunteer-role"><h3>Food Station / BBQ Help</h3><p>Assist at food stations or the BBQ, helping serve and keep things running smoothly.</p></div>
            <div className="card volunteer-role"><h3>Crowd Guidance / Guest Help</h3><p>Be a friendly face! Direct guests, answer questions, and help everyone have a great time.</p></div>
            <div className="card volunteer-role"><h3>Equipment Setup (sound, tents, signage)</h3><p>Help with the technical side—setting up sound systems, tents, and event signage.</p></div>
            <div className="card volunteer-role"><h3>Wherever Needed</h3><p>Just want to help? We’ll find a spot for you—flexible, all-around support wherever it’s needed most.</p></div>
          </div>
        </div>
      </section>


      {/* Volunteer Sign Up Button */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>Sign Up to Volunteer</h2>
            <a
              href="https://forms.gle/PJDFegBR7jDZbSsr9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary volunteer-signup-btn"
            >
              Go to Volunteer Sign Up Form
            </a>
          </div>
        </div>
      </section>

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