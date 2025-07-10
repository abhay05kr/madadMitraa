import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const tagColors = {
  'Food': 'green',
  'Education': 'yellow',
  'Medical': 'blue',
  'Orphan Help': 'orange',
  'Animal Help': 'purple',
  'भोजन': 'green',
  'शिक्षा': 'yellow',
  'चिकित्सा': 'blue',
  'अनाथ सहायता': 'orange',
  'पशु सहायता': 'purple',
};

function HelpedPeople() {
  const { t, language } = useTranslation();
  const [activeCat, setActiveCat] = useState('all');
  const [currentStory, setCurrentStory] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    const interval = setInterval(() => {
      setCurrentStory((c) => (c + 1) % t('helpedPeople.stories').length);
    }, 4000);
    return () => clearInterval(interval);
  }, [t]);

  const categories = [
    { key: 'all', label: t('helpedPeople.categories.all') },
    { key: 'children', label: t('helpedPeople.categories.children') },
    { key: 'elderly', label: t('helpedPeople.categories.elderly') },
    { key: 'animals', label: t('helpedPeople.categories.animals') },
    { key: 'emergency', label: t('helpedPeople.categories.emergency') },
  ];

  const helpedList = [
    { name: 'Amit', type: 'children', location: 'Lucknow', tag: t('helpedPeople.tags.education'), quote: t('helpedPeople.quotes.0'), date: '2024-03-12', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Priya', type: 'elderly', location: 'Kanpur', tag: t('helpedPeople.tags.food'), quote: t('helpedPeople.quotes.1'), date: '2024-02-28', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Ravi', type: 'emergency', location: 'Varanasi', tag: t('helpedPeople.tags.medical'), quote: t('helpedPeople.quotes.2'), date: '2024-01-15', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
    { name: 'Sana', type: 'children', location: 'Delhi', tag: t('helpedPeople.tags.orphan'), quote: t('helpedPeople.quotes.3'), date: '2024-03-01', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Baba Ram', type: 'elderly', location: 'Allahabad', tag: t('helpedPeople.tags.food'), quote: t('helpedPeople.quotes.4'), date: '2024-02-10', img: 'https://randomuser.me/api/portraits/men/70.jpg' },
    { name: 'Tommy', type: 'animals', location: 'Lucknow', tag: t('helpedPeople.tags.animal'), quote: t('helpedPeople.quotes.5'), date: '2024-03-05', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80' },
  ];

  const filtered = activeCat === 'all' ? helpedList : helpedList.filter(p => p.type === activeCat);

  const stories = t('helpedPeople.stories');

  return (
    <div className="helped-root">
      {/* Intro Section */}
      <section className="helped-intro">
        <div className="helped-intro-bg"></div>
        <div className="helped-intro-overlay"></div>
        <div className="helped-intro-content">
          <h1 className="helped-intro-title">{t('helpedPeople.intro.title')}</h1>
          <p className="helped-intro-sub">{t('helpedPeople.intro.subtitle')}</p>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="helped-why-section">
        <div className="helped-why-card">
          <span role="img" aria-label="heart">❤️</span> {t('helpedPeople.why')}
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="helped-tabs-section">
        <div className="helped-tabs">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`helped-tab${activeCat === cat.key ? ' active' : ''}`}
              onClick={() => setActiveCat(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="helped-gallery-section">
        <div className="helped-gallery-grid">
          {filtered.map((p, i) => (
            <div className={`helped-card helped-float${i % 3}`} key={i}>
              <div className="helped-img-wrap">
                <img src={p.img} alt={p.name} className="helped-img" />
              </div>
              <div className="helped-info">
                <div className="helped-name">{p.name}</div>
                <div className="helped-location">{p.location}</div>
                <div className={`helped-tag helped-tag-${tagColors[p.tag] || 'blue'}`}>{p.tag}</div>
                <div className="helped-quote">"{p.quote}"</div>
                <div className="helped-date">{p.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="helped-carousel-section">
        <div className="helped-carousel" ref={carouselRef}>
          {stories.map((story, i) => (
            <div className={`helped-carousel-slide${i === currentStory ? ' active' : ''}`} key={i}>
              <div className="helped-carousel-card">
                <img src={filtered[0]?.img || ''} alt="Before" />
                <div className="helped-carousel-note">{story.before.note}</div>
              </div>
              <div className="helped-carousel-arrow">→</div>
              <div className="helped-carousel-card">
                <img src={filtered[0]?.img || ''} alt="After" />
                <div className="helped-carousel-note">{story.after.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="helped-cta-banner">
        <h2>{language === 'hi' ? 'क्या आप भी किसी की मदद करना चाहते हैं?' : 'Do you also want to help someone?'}</h2>
        <div className="helped-cta-btns">
          <Link to="/join-us" className="btn btn-accent helped-cta-btn">{language === 'hi' ? 'स्वयंसेवक बनें' : 'Become Volunteer'}</Link>
          <Link to="/get-help" className="btn btn-white helped-cta-btn">{language === 'hi' ? 'मदद माँगें' : 'Request Help'}</Link>
        </div>
      </section>
    </div>
  );
}

export default HelpedPeople; 