import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import adarshImg from '../assets/images/adarsh.jpg';
import abhayImg from '../assets/images/abhay1.jpg';
import sarveshImg from '../assets/images/sarvesh.jpg';
import abdulImg from '../assets/images/abdul.jpg';
import amitImg from '../assets/images/amit.jpg';
import aasraLogo from '../assets/images/aasra_logo.jpg';

const teamImages = [adarshImg, abhayImg, sarveshImg, abdulImg, amitImg];

// Team data with social media links
const teamData = [
  {
    name: 'Adarsh Kumar',
    role: 'Co-Founder',
    quote: 'मदद करना मेरा धर्म है।',
    social: {
      linkedin: 'https://www.linkedin.com/in/adarsh-kumar-0590a8235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/its_adarshkr_2810?igsh=MWY0ZzZ3bmxheW8zMw==',
      facebook: 'https://www.facebook.com/share/19cH1L8KHw/'
    }
  },
  {
    name: 'Abhay Kumar',
    role: 'Co-Founder',
    quote: 'हर मुस्कान की कीमत है।',
    social: {
      linkedin: 'https://www.linkedin.com/in/abhay-kumar-588a22230/',
      instagram: 'https://www.instagram.com/imrishi05?igsh=ODQ3dXBmZ202dXIz',
      facebook: 'https://www.facebook.com/share/r/1BsL1eY45U/'
    }
  },
  {
    name: 'Sarvesh kumar',
    role: 'Co-Founder',
    quote: 'साथ चलें, साथ बढ़ें।',
    social: {
      linkedin: 'https://www.linkedin.com/in/sarvesh-kumar-b890b2231',
      instagram: 'https://www.instagram.com/sarveshkr_45?igsh=MXNrem14anBwa29uMA==',
      facebook: 'https://www.facebook.com/share/1GNB8dTdNa/'
    }
  },
  {
    name: 'Abdul Salam',
    role: 'Co-Founder',
    quote: 'आपका साथ,हमारा प्रयास',
    social: {
      linkedin: 'https://www.linkedin.com/in/abdul-salam-2a53b024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
      facebook: 'https://www.facebook.com/abdul.salam.25786'
    }
  },
  {
    name: 'Amit kumar',
    role: 'Co-Founder',
    quote: 'साथ चलें, साथ बढ़ें।',
    social: {
      linkedin: '',
      instagram: 'https://www.instagram.com/__amit_patel0?utm_source=qr&igsh=anJ4dHFoMDBoaXh3',
      facebook: 'https://www.facebook.com/share/16x4h3V4By/'
    }
  }
];

const partners = [
  { name: 'NGO One', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png' },
  { name: 'Brand Two', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' },
  { name: 'Charity Org', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
];

function About() {
  const { t } = useTranslation();
  
  // Remove horizontal scrollbars
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);

  return (
    <div className="about-root">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-logo">
          <img src={aasraLogo} alt="AASRA WELFARE FOUNDATION" className="about-logo-img" />
        </div>
        <h1 className="about-hero-title">{t('about.hero.title')}</h1>
        <p className="about-hero-sub">{t('about.hero.subtitle')}</p>
      </section>

      {/* Our Story Timeline */}
      <section className="about-timeline-section">
        <h2 className="about-timeline-title">{t('about.journey.title')}</h2>
        <div className="about-timeline">
          <div className="about-timeline-line"></div>
          {t('about.journey.steps').map((step, i) => (
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
        <h2 className="about-team-title">{t('about.team.title')}</h2>
        <div className="about-team-scroll-container">
          <div className="about-team-grid">
            {teamData.map((member, i) => (
              <div className="about-team-card" key={i}>
                <img src={teamImages[i]} alt={member.name} className="about-team-img" />
                <h4 className="about-team-name">{member.name}</h4>
                <p className="about-team-role">{member.role}</p>
                <p className="about-team-quote">"{member.quote}"</p>
                <div className="about-team-social-icons">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn" 
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn" 
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {member.social.facebook && (
                    <a 
                      href={member.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn" 
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
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
            <h3>{t('about.mission.title')}</h3>
            <p>{t('about.mission.description')}</p>
          </div>
          <div className="about-mission-card yellow">
            <h3>{t('about.vision.title')}</h3>
            <p>{t('about.vision.description')}</p>
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
        <h2>{t('about.cta.title')}</h2>
        <p>{t('about.cta.subtitle')}</p>
        <div className="about-cta-btns">
          <Link to="/join-us" className="btn btn-accent">{t('about.cta.volunteerBtn')}</Link>
          <a href="/donate" className="btn btn-white">{t('about.cta.donateBtn')}</a>
        </div>
      </section>
    </div>
  );
}

export default About; 