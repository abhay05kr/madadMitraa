import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

function JoinUs() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);

  const handleCardClick = (type) => {
    setSelectedType(type);
    // Smooth scroll to form
    setTimeout(() => {
      document.querySelector('.joinus-form-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setSelectedType(null);
      e.target.reset();
    }, 3000);
  };

  const impactStats = [
    { icon: '👥', stat: '500+', text: t('joinUs.impact.stats.0.text') },
    { icon: '💰', stat: '₹2.5Cr+', text: t('joinUs.impact.stats.1.text') },
    { icon: '🏙️', stat: '50+', text: t('joinUs.impact.stats.2.text') },
    { icon: '❤️', stat: '1200+', text: t('joinUs.impact.stats.3.text') }
  ];

  return (
    <div className="joinus-root">
      {/* Hero Section */}
      <section className="joinus-hero">
        <div className="joinus-hero-bg"></div>
        <div className="joinus-hero-content">
          <h1 className="joinus-hero-title">{t('joinUs.hero.title')}</h1>
          <p className="joinus-hero-sub">{t('joinUs.hero.subtitle')}</p>
          <div className="joinus-hero-btns">
            <button className="btn btn-accent" onClick={() => handleCardClick('volunteer')}>{t('joinUs.hero.volunteerBtn')}</button>
            <button className="btn btn-white" onClick={() => handleCardClick('donor')}>{t('joinUs.hero.donateBtn')}</button>
          </div>
        </div>
      </section>

      {/* Selection Cards */}
      <section className="joinus-select-section">
        <div className="joinus-select-cards">
          <div 
            className={`joinus-select-card ${selectedType === 'volunteer' ? 'selected' : ''}`}
            onClick={() => handleCardClick('volunteer')}
          >
            <div className="joinus-select-icon">{t('joinUs.selection.volunteer.icon')}</div>
            <div className="joinus-select-title">{t('joinUs.selection.volunteer.title')}</div>
            <div className="joinus-select-desc">{t('joinUs.selection.volunteer.desc')}</div>
          </div>
          
          <div 
            className={`joinus-select-card ${selectedType === 'donor' ? 'selected' : ''}`}
            onClick={() => handleCardClick('donor')}
          >
            <div className="joinus-select-icon">{t('joinUs.selection.donor.icon')}</div>
            <div className="joinus-select-title">{t('joinUs.selection.donor.title')}</div>
            <div className="joinus-select-desc">{t('joinUs.selection.donor.desc')}</div>
          </div>
          
          <div 
            className={`joinus-select-card ${selectedType === 'skillContributor' ? 'selected' : ''}`}
            onClick={() => handleCardClick('skillContributor')}
          >
            <div className="joinus-select-icon">{t('joinUs.selection.skillContributor.icon')}</div>
            <div className="joinus-select-title">{t('joinUs.selection.skillContributor.title')}</div>
            <div className="joinus-select-desc">{t('joinUs.selection.skillContributor.desc')}</div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="joinus-form-section">
        <div className="joinus-form-card">
          <h2 className="joinus-form-title">{t('joinUs.form.title')}</h2>
          {submitted ? (
            <div className="success-message">{t('joinUs.form.success')}</div>
          ) : (
            <form className="joinus-form" onSubmit={handleSubmit}>
              <label>{t('joinUs.form.name')}
                <input type="text" name="name" required placeholder={t('joinUs.form.namePlaceholder')} />
              </label>
              
              <label>{t('joinUs.form.email')}
                <input type="email" name="email" required placeholder={t('joinUs.form.emailPlaceholder')} />
              </label>
              
              <label>{t('joinUs.form.phone')}
                <input type="tel" name="phone" required placeholder={t('joinUs.form.phonePlaceholder')} pattern="[0-9]{10}" />
              </label>
              
              <label>{t('joinUs.form.location')}
                <input type="text" name="location" required placeholder={t('joinUs.form.locationPlaceholder')} />
              </label>
              
              <label>{t('joinUs.form.age')}
                <input type="number" name="age" min="18" max="100" required placeholder={t('joinUs.form.agePlaceholder')} />
              </label>
              
              <label>{t('joinUs.form.occupation')}
                <input type="text" name="occupation" required placeholder={t('joinUs.form.occupationPlaceholder')} />
              </label>
              
              <label>{t('joinUs.form.motivation')}
                <textarea name="motivation" required placeholder={t('joinUs.form.motivationPlaceholder')}></textarea>
              </label>
              
              <label>{t('joinUs.form.availability')}
                <textarea name="availability" required placeholder={t('joinUs.form.availabilityPlaceholder')}></textarea>
              </label>
              
              <label>{t('joinUs.form.skills')}
                <textarea name="skills" placeholder={t('joinUs.form.skillsPlaceholder')}></textarea>
              </label>
              
              <button type="submit" className="btn btn-primary joinus-submit-btn">{t('joinUs.form.submit')}</button>
            </form>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="joinus-impact-section">
        <h2 className="joinus-impact-title">{t('joinUs.impact.title')}</h2>
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
          <h2>{t('joinUs.cta.title')}</h2>
          <div className="joinus-cta-btns">
            <button className="btn btn-accent joinus-cta-btn">{t('joinUs.cta.volunteerBtn')}</button>
            <button className="btn btn-white joinus-cta-btn">{t('joinUs.cta.contributeBtn')}</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinUs; 