import { useEffect } from 'react';

const journey = [
  { title: 'शुरुआत', desc: '2022 में कुछ दोस्तों ने मिलकर मदद की एक नई राह चुनी।' },
  { title: 'पहला अभियान', desc: 'पहली बार 50 परिवारों को भोजन और कपड़े दिए।' },
  { title: 'टीम विस्तार', desc: 'नई जगहों पर नए वालंटियर्स जुड़े।' },
  { title: 'सैकड़ों की मदद', desc: 'अब तक 1200+ लोगों की मदद की जा चुकी है।' },
];

const team = [
  { name: 'Adarsh Kumar', role: 'Co-Founder', quote: 'मदद करना मेरा धर्म है।', img: 'https://randomuser.me/api/portraits/men/32.jpg', linkedin: '#', twitter: '#' },
  { name: 'Abhay Kumar', role: 'Co-Founder', quote: 'हर मुस्कान की कीमत है।', img: 'https://randomuser.me/api/portraits/men/45.jpg', linkedin: '#', twitter: '#' },
  { name: 'Sarvesh kumar', role: 'Co-Founder', quote: 'साथ चलें, साथ बढ़ें।', img: 'https://randomuser.me/api/portraits/women/44.jpg', linkedin: '#', twitter: '#' },
  { name: 'Abdul Salam', role: 'Co-Founder', quote: 'आपका साथ,हमारा प्रयास', img: 'https://randomuser.me/api/portraits/women/44.jpg', linkedin: '#', twitter: '#' },
  { name: 'Amit kumar', role: 'Co-Founder', quote: 'साथ चलें, साथ बढ़ें।', img: 'https://randomuser.me/api/portraits/women/44.jpg', linkedin: '#', twitter: '#' },
];

const partners = [
  { name: 'NGO One', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png' },
  { name: 'Brand Two', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' },
  { name: 'Charity Org', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
];


function About() {
  // Remove horizontal scrollbars
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);

  return (
    <div className="about-root">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-hero-title">हम कौन हैं?</h1>
        <p className="about-hero-sub">"कुछ लोग मदद माँगते हैं, कुछ लोग मदद करते हैं, और हम — वो पुल हैं जो इन्हें जोड़ता है।"</p>
      </section>

      {/* Our Story Timeline */}
      <section className="about-timeline-section">
        <h2 className="about-timeline-title">हमारी यात्रा</h2>
        <div className="about-timeline">
          <div className="about-timeline-line"></div>
          {journey.map((step, i) => (
            <div className={`about-timeline-row ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
              <div className="about-timeline-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-team-section">
        <h2 className="about-team-title">हमारी टीम</h2>
        <div className="about-team-scroll-container">
          <div className="about-team-grid">
            {team.map((member, i) => (
              <div className="about-team-card" key={i}>
                <img src={member.img} alt={member.name} className="about-team-img" />
                <h4 className="about-team-name">{member.name}</h4>
                <p className="about-team-role">{member.role}</p>
                <p className="about-team-quote">"{member.quote}"</p>
                <div className="about-team-social">
                  <a href={member.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href={member.twitter} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-section">
        <div className="about-mission-grid">
          <div className="about-mission-card green">
            <h3>हमारा उद्देश्य</h3>
            <p>हर जरूरतमंद तक सहायता पहुँचाना, चाहे वो शिक्षा हो, भोजन, स्वास्थ्य या भावनात्मक सहयोग।</p>
          </div>
          <div className="about-mission-card yellow">
            <h3>हमारा विजन</h3>
            <p>एक ऐसा भारत जहाँ मदद माँगने में संकोच ना हो और मदद करने में हिचक ना हो।</p>
          </div>
        </div>
      </section>

      {/* Partners/Collaboration */}
      <section className="about-partners-section">
        <div className="about-partners-strip">
          {partners.map((p, i) => (
            <div className="about-partner-logo" key={i}>
              <img src={p.logo} alt={p.name} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="about-cta-banner">
        <h2>क्या आप भी बदलाव का हिस्सा बनना चाहते हैं?</h2>
        <p>हमारे साथ मिलकर किसी की ज़िन्दगी बदलिए।</p>
        <div className="about-cta-btns">
          <a href="/join-us" className="btn btn-accent">Volunteer Now</a>
          <a href="/donate" className="btn btn-white">Donate Now</a>
        </div>
      </section>
    </div>
  );
}

export default About; 