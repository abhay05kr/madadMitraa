import { useState, useEffect, useRef } from 'react';

const categories = [
  { key: 'all', label: 'सभी' },
  { key: 'children', label: 'बच्चे' },
  { key: 'elderly', label: 'वरिष्ठ नागरिक' },
  { key: 'animals', label: 'पशु सहायता' },
  { key: 'emergency', label: 'आपातकाल' },
];

const helpedList = [
  { name: 'Amit', type: 'children', location: 'Lucknow', tag: 'शिक्षा', quote: 'अब मैं स्कूल जा सकता हूँ!', date: '2024-03-12', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya', type: 'elderly', location: 'Kanpur', tag: 'भोजन', quote: 'आपकी मदद से भूख नहीं लगी।', date: '2024-02-28', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Ravi', type: 'emergency', location: 'Varanasi', tag: 'चिकित्सा', quote: 'इलाज मिल गया, धन्यवाद!', date: '2024-01-15', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
  { name: 'Sana', type: 'children', location: 'Delhi', tag: 'अनाथ सहायता', quote: 'मुझे नए कपड़े और किताबें मिलीं।', date: '2024-03-01', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Baba Ram', type: 'elderly', location: 'Allahabad', tag: 'भोजन', quote: 'अब पेट भरता है, दुआएं!', date: '2024-02-10', img: 'https://randomuser.me/api/portraits/men/70.jpg' },
  { name: 'Tommy', type: 'animals', location: 'Lucknow', tag: 'पशु सहायता', quote: 'अब मैं स्वस्थ हूँ!', date: '2024-03-05', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80' },
];

const tagColors = {
  'भोजन': 'green',
  'शिक्षा': 'yellow',
  'चिकित्सा': 'blue',
  'अनाथ सहायता': 'orange',
  'पशु सहायता': 'purple',
};

const stories = [
  {
    before: { img: 'https://randomuser.me/api/portraits/men/32.jpg', note: 'स्कूल छूट गया था' },
    after: { img: 'https://randomuser.me/api/portraits/men/32.jpg', note: 'अब स्कूल जाता हूँ!' }
  },
  {
    before: { img: 'https://randomuser.me/api/portraits/women/44.jpg', note: 'भूख लगी थी' },
    after: { img: 'https://randomuser.me/api/portraits/women/44.jpg', note: 'अब पेट भरता है' }
  },
  {
    before: { img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80', note: 'बीमार था' },
    after: { img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80', note: 'अब स्वस्थ हूँ' }
  },
];

function HelpedPeople() {
  const [activeCat, setActiveCat] = useState('all');
  const [currentStory, setCurrentStory] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    const interval = setInterval(() => {
      setCurrentStory((c) => (c + 1) % stories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filtered = activeCat === 'all' ? helpedList : helpedList.filter(p => p.type === activeCat);

  return (
    <div className="helped-root">
      {/* Intro Section */}
      <section className="helped-intro">
        <div className="helped-intro-bg"></div>
        <div className="helped-intro-overlay"></div>
        <div className="helped-intro-content">
          <h1 className="helped-intro-title">अब तक जिनकी ज़िंदगी बदली</h1>
          <p className="helped-intro-sub">हमारा हर कदम किसी मुस्कान की वजह बना है।<br/>हर मुस्कान, हर धन्यवाद, हमारे लिए सबसे बड़ा इनाम है।</p>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="helped-why-section">
        <div className="helped-why-card">
          <span role="img" aria-label="heart">❤️</span> हम मानते हैं कि हर छोटी मदद, किसी के लिए बड़ी उम्मीद बन सकती है।
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
                <div className="helped-quote">“{p.quote}”</div>
                <div className="helped-date">{p.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="helped-carousel-section">
        <div className="helped-carousel" ref={carouselRef}>
          {stories.map((s, i) => (
            <div className={`helped-carousel-slide${i === currentStory ? ' active' : ''}`} key={i}>
              <div className="helped-carousel-card before">
                <img src={s.before.img} alt="before" />
                <div className="helped-carousel-note">{s.before.note}</div>
              </div>
              <div className="helped-carousel-arrow">→</div>
              <div className="helped-carousel-card after">
                <img src={s.after.img} alt="after" />
                <div className="helped-carousel-note">{s.after.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="helped-cta-banner">
        <h2>क्या आप भी किसी की कहानी का हिस्सा बनना चाहते हैं?</h2>
        <div className="helped-cta-btns">
          <a href="/get-help" className="btn btn-accent helped-cta-btn">मदद चाहिए</a>
          <a href="/join-us" className="btn btn-white helped-cta-btn">मैं मदद करना चाहता हूँ</a>
        </div>
      </section>
    </div>
  );
}

export default HelpedPeople; 