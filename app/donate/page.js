
"use client";
import React, { useState } from 'react';

export default function DonatePage() {
  const donationTiers = [
    {
      amount: '$25',
      title: 'Supporter Tier 1',
      benefits: [
        'Thank you for supporting the Block Party!',
        'Includes a Block Party sticker or koozie'
      ],
      icon: '🟢'
    },
    {
      amount: '$50',
      title: 'Supporter Tier 2',
      benefits: [
        'Sticker, koozie, and your choice of a hat or t-shirt',
        'Plus a keychain bottle opener!'
      ],
      icon: '🧢'
    },
    {
      amount: '$100',
      title: 'Supporter Tier 3',
      benefits: [
        'Sticker, koozie, hat, t-shirt, and keychain bottle opener',
        'Perfect for repping the Block Party all year'
      ],
      icon: '👕'
    },
    {
      amount: '$150',
      title: 'Supporter Tier 4',
      benefits: [
        'Sticker, koozie, hat, t-shirt, sweatshirt, and keychain bottle opener',
        'Get the full Block Party bundle!'
      ],
      icon: '🧥'
    },
    {
      amount: '$200',
      title: 'Supporter Tier 5',
      benefits: [
        '2x stickers, 2x koozies, hat, t-shirt, sweatshirt, and keychain bottle opener',
        'Even more swag for your support'
      ],
      icon: '🎁'
    },
    {
      amount: '$250',
      title: 'Supporter Tier 6',
      benefits: [
        '2x stickers, 2x koozies, 2x hats, 2x t-shirts, 2x sweatshirts, 2x keychain bottle openers',
        'Ultimate supporter bundle – thank you!'
      ],
      icon: '⭐'
    }
  ];

  const predefinedAmounts = [25, 50, 100, 150, 200, 250];

  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleDonate = (e) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    if (!amount) {
      alert('Please select or enter a donation amount.');
      return;
    }
    alert(`Thank you for your ${donationType} donation of $${amount}! This would redirect to a payment processor.`);
  };

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Support Our Festival</h1>
          <p>Help us keep the music alive and our community connected</p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2>Your Impact</h2>
              <p>
                The Oceanside Community Music Festival is a nonprofit event that relies on community support 
                to bring world-class music and programming to our beautiful city.
              </p>
              <p>
                Your donation directly supports local musicians, helps us keep ticket prices affordable for families, 
                and ensures we can continue growing this amazing celebration of music and community.
              </p>
              <div className="impact-stats">
                <div className="stat">
                  <h3>75%</h3>
                  <p>of artists are local musicians</p>
                </div>
                <div className="stat">
                  <h3>$15K</h3>
                  <p>paid to local musicians in 2023</p>
                </div>
                <div className="stat">
                  <h3>500+</h3>
                  <p>families attended for free</p>
                </div>
              </div>
            </div>
            <div className="donate-image">
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
                💝
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How Your Donation Helps</h2>
          <div className="grid grid-1" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center', fontSize: '1.15rem', color: '#444', padding: '2rem' }}>
              <p>
                <strong>Every dollar you give goes directly back into the South O Block Party.</strong> Your support helps us cover essentials like permits, music, food, art, and all the details that make the event possible. There are no paid staff—just neighbors, volunteers, and local businesses working together to keep the party going year after year.
              </p>
              <p>
                Thank you for helping us keep this community tradition alive!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Donation Levels</h2>
          <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {donationTiers.map((tier, index) => (
              <div key={index} className="donation-tier">
                <div className="tier-icon">{tier.icon}</div>
                <div className="tier-content">
                  <h3>{tier.title}</h3>
                  <div className="tier-amount">{tier.amount}</div>
                  <ul>
                    {tier.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Make a Donation</h2>
            <div className="card">
              <form onSubmit={handleDonate} className="donation-form">
                <div className="donation-type">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="donationType"
                      value="one-time"
                      checked={donationType === 'one-time'}
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    One-time donation
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={donationType === 'monthly'}
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    Monthly donation
                  </label>
                </div>

                <div className="amount-selection">
                  <h4>Select Amount:</h4>
                  <div className="amount-buttons">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="custom-amount">
                    <label htmlFor="customAmount">Other amount:</label>
                    <div className="custom-input">
                      <span>$</span>
                      <input
                        type="number"
                        id="customAmount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="0"
                        min="1"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="donorName">Name (optional)</label>
                  <input type="text" id="donorName" name="donorName" />
                </div>

                <div className="form-group">
                  <label htmlFor="donorEmail">Email (for receipt)</label>
                  <input type="email" id="donorEmail" name="donorEmail" required />
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="anonymous" />
                    I'd like this donation to be anonymous
                  </label>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="updates" defaultChecked />
                    Send me updates about the festival
                  </label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Donate {selectedAmount || customAmount ? `$${selectedAmount || customAmount}` : ''} Now
                </button>

                <p style={{ fontSize: '0.9rem', color: '#666', textAlign: 'center', marginTop: '1rem' }}>
                  Your donation is tax-deductible. You'll receive a receipt via email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Other Ways to Support</h2>
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <h3>🙋‍♀️ Volunteer</h3>
              <p>Donate your time and skills to help make the festival amazing.</p>
              <a href="/volunteer" className="btn btn-secondary">Learn More</a>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3>👕 Buy Merch</h3>
              <p>Show your support with festival merchandise - proceeds support the event.</p>
              <a href="/merch" className="btn btn-secondary">Shop Now</a>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3>📢 Spread the Word</h3>
              <p>Share the festival with friends and family on social media.</p>
              <button className="btn btn-secondary">Share Festival</button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .impact-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat h3 {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        .stat p {
          font-size: 0.9rem;
          margin: 0;
        }
        
        .donation-tier {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          background: white;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          margin-bottom: 1rem;
        }
        
        .tier-icon {
          font-size: 2.5rem;
          min-width: 60px;
        }
        
        .tier-content h3 {
          color: var(--dark-color);
          margin-bottom: 0.5rem;
        }
        
        .tier-amount {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        
        .tier-content ul {
          list-style: none;
          padding: 0;
        }
        
        .tier-content li {
          padding: 0.3rem 0;
          color: #666;
          position: relative;
          padding-left: 1.2rem;
        }
        
        .tier-content li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
        }
        
        .donation-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .donation-type {
          display: flex;
          gap: 2rem;
          justify-content: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .radio-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        
        .amount-selection h4 {
          margin-bottom: 1rem;
          color: var(--dark-color);
        }
        
        .amount-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .amount-btn {
          padding: 1rem;
          border: 2px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .amount-btn:hover {
          border-color: var(--primary-color);
        }
        
        .amount-btn.selected {
          border-color: var(--primary-color);
          background: var(--primary-color);
          color: white;
        }
        
        .custom-amount {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .custom-input {
          display: flex;
          align-items: center;
          border: 2px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .custom-input span {
          padding: 0.8rem 1rem;
          background: #f8f9fa;
          border-right: 1px solid #ddd;
          font-weight: 600;
        }
        
        .custom-input input {
          flex: 1;
          padding: 0.8rem;
          border: none;
          outline: none;
          font-size: 1rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-group label {
          font-weight: 600;
          color: var(--dark-color);
        }
        
        .form-group input {
          padding: 0.8rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: normal !important;
        }
        
        @media (max-width: 768px) {
          .impact-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .donation-tier {
            flex-direction: column;
            text-align: center;
          }
          
          .donation-type {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}