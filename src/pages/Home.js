import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

function useCountUp(end) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / 50;
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return count;
}

function Home() {
  const { t } = useTranslation();
  
  // Impact metrics
  const helped = useCountUp(1200);
  const volunteers = useCountUp(150);
  const ongoing = useCountUp(18);

  // Testimonials carousel
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % t('home.testimonials.stories').length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [t]);

  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="hero-section-home">
        <div className="hero-left">
          <h2 className="hero-heading">{t('home.hero.title')}</h2>
          <p className="hero-subtext">{t('home.hero.subtitle')}</p>
          <div className="hero-cta-group">
            <Link to="/join-us" className="btn btn-accent">{t('home.hero.volunteerBtn')}</Link>
            <Link to="/get-help" className="btn btn-white">{t('home.hero.helpBtn')}</Link>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80" alt="Helping Hands" className="hero-img animate-float" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-section fade-in">
        <div className="who-left">
          <h3 className="who-title">{t('home.whoWeAre.title')}</h3>
          <p className="who-mission">{t('home.whoWeAre.mission')}</p>
        </div>
        <div className="who-right">
          <div className="who-vision">{t('home.whoWeAre.vision')}</div>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Team" className="who-img" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-section">
        <h2 className="what-title">{t('home.whatWeDo.title')}</h2>
        <div className="what-grid">
          {t('home.whatWeDo.services').map((item, i) => (
            <div className="what-card" key={i}>
              <div className="what-icon">{item.icon}</div>
              <div className="what-card-title">{item.title}</div>
              <div className="what-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="impact-section">
        <div className="impact-card">
          <div className="impact-number">{helped}+</div>
          <div className="impact-label">{t('home.impact.peopleHelped')}</div>
        </div>
        <div className="impact-card">
          <div className="impact-number">{volunteers}+</div>
          <div className="impact-label">{t('home.impact.volunteers')}</div>
        </div>
        <div className="impact-card">
          <div className="impact-number">{ongoing}</div>
          <div className="impact-label">{t('home.impact.ongoingCases')}</div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">{t('home.testimonials.title')}</h2>
        <div className="testimonials-carousel">
          {t('home.testimonials.stories').map((t, i) => (
            <div className={`testimonial-card${i === current ? ' active' : ''}`} key={i}>
              <img src={`https://randomuser.me/api/portraits/${t.name === 'Priya' ? 'women' : 'men'}/${32 + i * 12}.jpg`} alt={t.name} className="testimonial-img" />
              <div className="testimonial-quote">"{t.quote}"</div>
              <div className="testimonial-name">- {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Email Notification Form */}
      <section className="email-section">
        <form className="email-form">
          <input type="email" placeholder={t('home.email.placeholder')} required />
          <button type="submit" className="btn btn-primary">{t('home.email.button')}</button>
        </form>
      </section>
    </div>
  );
}

export default Home; 