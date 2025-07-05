import { useState, useRef, useEffect } from 'react';

const impactStats = [
  { icon: '🍲', stat: '500+', text: 'Meals Served' },
  { icon: '📚', stat: '200+', text: 'Kids Educated' },
  { icon: '🐶', stat: '100+', text: 'Animals Helped' },
  { icon: '👶', stat: '50+', text: 'Orphan Kids Supported' },
];

const skillsList = ['Teaching', 'Cooking', 'Fundraising', 'Medical', 'Design', 'Social Media', 'Event Management'];

function JoinUs() {
  const [selected, setSelected] = useState('volunteer');
  const [showForm, setShowForm] = useState(false);
  const [skills, setSkills] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);

  function handleCardClick(type) {
    setSelected(type);
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }

  function handleSkillToggle(skill) {
    setSkills((prev) => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for joining! We will contact you soon.');
    setShowForm(false);
    setSkills([]);
    formRef.current && formRef.current.reset();
  }

  return (
    <div className="joinus-root">
      {/* Hero Section */}
      <section className="joinus-hero">
        <div className="joinus-hero-bg"></div>
        <div className="joinus-hero-content">
          <h1 className="joinus-hero-title">आपका एक कदम, किसी की पूरी ज़िंदगी बदल सकता है</h1>
          <p className="joinus-hero-sub">हमसे जुड़ें और समाज में सकारात्मक बदलाव लाएँ</p>
          <div className="joinus-hero-btns">
            <button className="btn btn-accent" onClick={() => handleCardClick('volunteer')}>Volunteer बनें</button>
            <button className="btn btn-white" onClick={() => handleCardClick('donor')}>Donate करें</button>
          </div>
        </div>
      </section>

      {/* Selection Cards */}
      <section className="joinus-select-section">
        <div className="joinus-select-cards">
          <div className={`joinus-select-card${selected === 'volunteer' ? ' selected' : ''}`} onClick={() => handleCardClick('volunteer')}>
            <div className="joinus-select-icon">🧍</div>
            <div className="joinus-select-title">Volunteer</div>
            <div className="joinus-select-desc">समय और सेवा दें</div>
          </div>
          <div className={`joinus-select-card${selected === 'donor' ? ' selected' : ''}`} onClick={() => handleCardClick('donor')}>
            <div className="joinus-select-icon">💰</div>
            <div className="joinus-select-title">Donor</div>
            <div className="joinus-select-desc">आर्थिक सहायता दें</div>
          </div>
          <div className={`joinus-select-card${selected === 'skills' ? ' selected' : ''}`} onClick={() => handleCardClick('skills')}>
            <div className="joinus-select-icon">🛠️</div>
            <div className="joinus-select-title">Skill Contributor</div>
            <div className="joinus-select-desc">विशेष कौशल से मदद करें</div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      {showForm && (
        <section className="joinus-form-section" ref={formRef}>
          <div className="joinus-form-card animate-float-in">
            <h2 className="joinus-form-title">{selected === 'volunteer' ? 'Volunteer Registration' : selected === 'donor' ? 'Donor Registration' : 'Skill Contributor Registration'}</h2>
            <form className="joinus-form" onSubmit={handleSubmit}>
              <label>नाम
                <input type="text" required placeholder="अपना नाम" />
              </label>
              <label>ईमेल
                <input type="email" required placeholder="Email" />
              </label>
              <label>फोन
                <input type="tel" required placeholder="Mobile Number" pattern="[0-9]{10}" />
              </label>
              <label>शहर
                <input type="text" required placeholder="City" />
              </label>
              {selected === 'volunteer' && (
                <>
                  <label>Preferred Area
                    <select required>
                      <option value="">चुनें</option>
                      <option>Education</option>
                      <option>Food</option>
                      <option>Animals</option>
                      <option>Orphan Kids</option>
                      <option>Medical</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>Time Availability
                    <div className="joinus-checkbox-group">
                      <label><input type="checkbox" /> Few hours/week</label>
                      <label><input type="checkbox" /> Few days/month</label>
                      <label><input type="checkbox" /> Full-time</label>
                    </div>
                  </label>
                  <label>Previous Experience (optional)
                    <textarea placeholder="Describe any relevant experience"></textarea>
                  </label>
                </>
              )}
              {selected === 'donor' && (
                <>
                  <label>Donation Type
                    <select required>
                      <option value="">चुनें</option>
                      <option>One Time</option>
                      <option>Monthly</option>
                    </select>
                  </label>
                  <label>Amount (₹)
                    <input type="number" min="1" required placeholder="Amount" />
                  </label>
                  <label>UPI/Payment Link
                    <input type="text" placeholder="UPI ID or Payment Link" />
                  </label>
                </>
              )}
              {selected === 'skills' && (
                <>
                  <label>Skills
                    <div className="joinus-skills-group">
                      {skillsList.map(skill => (
                        <span key={skill} className={`joinus-skill-chip${skills.includes(skill) ? ' selected' : ''}`} onClick={() => handleSkillToggle(skill)}>{skill}</span>
                      ))}
                    </div>
                  </label>
                  {/* Availability calendar can be added here in future */}
                </>
              )}
              <button type="submit" className="btn btn-primary joinus-submit-btn">Submit</button>
            </form>
          </div>
        </section>
      )}

      {/* Impact Highlights Section */}
      <section className="joinus-impact-section">
        <h2 className="joinus-impact-title">Your Small Help = Real Impact</h2>
        <div className="joinus-impact-grid">
          {impactStats.map((item, i) => (
            <div className={`joinus-impact-card animate-impact${i}`} key={i}>
              <div className="joinus-impact-icon">{item.icon}</div>
              <div className="joinus-impact-stat">{item.stat}</div>
              <div className="joinus-impact-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Motivational CTA Banner */}
      <section className="joinus-cta-banner">
        <div className="joinus-cta-bg"></div>
        <div className="joinus-cta-content">
          <h2>हर दिन किसी की ज़रूरत बनता है। क्या आप उस दिन का हीरो बनेंगे?</h2>
          <div className="joinus-cta-btns">
            <a href="#" className="btn btn-accent joinus-cta-btn">Yes, I want to Volunteer</a>
            <a href="#" className="btn btn-white joinus-cta-btn">Yes, I want to Contribute</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinUs; 