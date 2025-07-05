import { useEffect, useRef, useState } from 'react';

const services = [
  { icon: '🍲', title: 'भोजन सहायता', desc: 'जरूरतमंदों को पौष्टिक भोजन उपलब्ध कराना।' },
  { icon: '📚', title: 'शिक्षा', desc: 'बच्चों को किताबें, फीस और शिक्षा सामग्री देना।' },
  { icon: '🩺', title: 'चिकित्सा', desc: 'मेडिकल सहायता और दवाइयाँ उपलब्ध कराना।' },
  { icon: '🐾', title: 'पशु कल्याण', desc: 'बेजुबान जानवरों की देखभाल और सहायता।' },
  { icon: '👶', title: 'अनाथ बच्चों की मदद', desc: 'अनाथ बच्चों को कपड़े, खिलौने और शिक्षा देना।' },
  { icon: '🌱', title: 'पर्यावरण', desc: 'पौधारोपण और स्वच्छता अभियान।' },
];

const testimonials = [
  { name: 'Amit', quote: 'SahyogSetu ने मेरी ज़िन्दगी बदल दी।', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya', quote: 'मुझे समय पर मदद मिली, धन्यवाद!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Ravi', quote: 'यहाँ के लोग बहुत दयालु हैं।', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let raf;
    function update() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }
    update();
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return count;
}

function Home() {
  // Impact metrics
  const helped = useCountUp(1200);
  const volunteers = useCountUp(150);
  const ongoing = useCountUp(18);

  // Testimonials carousel
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="hero-section-home">
        <div className="hero-left">
          <h2 className="hero-heading">एक साथ, एक उम्मीद, <br /> एक बदलाव।</h2>
          <p className="hero-subtext">हम मिलकर बदल सकते हैं ज़िन्दगियाँ — बस एक साथ चलने की ज़रूरत है।</p>
          <div className="hero-cta-group">
            <a href="/join-us" className="btn btn-accent">Join as Volunteer</a>
            <a href="/get-help" className="btn btn-white">Request Help</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/hands-2027760_1280.png" alt="Helping Hands" className="hero-img animate-float" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-section fade-in">
        <div className="who-left">
          <h3 className="who-title">हम कौन हैं?</h3>
          <p className="who-mission">हमारा मिशन है समाज के हर जरूरतमंद तक मदद पहुँचाना, ताकि कोई भी पीछे न रह जाए।</p>
        </div>
        <div className="who-right">
          <div className="who-vision">हमारा विज़न: <br /> एक ऐसा समाज जहाँ हर कोई एक-दूसरे का सहारा बने।</div>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Team" className="who-img" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-section">
        <h2 className="what-title">हम क्या करते हैं?</h2>
        <div className="what-grid">
          {services.map((item, i) => (
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
          <div className="impact-label">लोगों की मदद</div>
        </div>
        <div className="impact-card">
          <div className="impact-number">{volunteers}+</div>
          <div className="impact-label">वालंटियर्स</div>
        </div>
        <div className="impact-card">
          <div className="impact-number">{ongoing}</div>
          <div className="impact-label">चल रहे केस</div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">सच्ची कहानियाँ</h2>
        <div className="testimonials-carousel">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card${i === current ? ' active' : ''}`} key={i}>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <div className="testimonial-quote">“{t.quote}”</div>
              <div className="testimonial-name">- {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Email Notification Form */}
      <section className="email-section">
        <form className="email-form">
          <input type="email" placeholder="Enter your email for updates" required />
          <button type="submit" className="btn btn-primary">Notify Me</button>
        </form>
      </section>
    </div>
  );
}

export default Home; 