import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import "./DashboardCTA.css";

const DashboardCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleButtonClick = (event, action) => {
  const button = event.target;
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);

  if (action === "volunteer") {
    console.log("Navigate to volunteer page");
  } else if (action === "contribute") {
    console.log("Navigate to contribute page");
  }
};


  return (
    <section ref={sectionRef} className="dashboard-cta">
      <div className="cta-container">
        <div className={`cta-content ${isVisible ? "fade-in-up" : ""}`}>
          <h2 className="cta-title">
            {t('dashboard.cta.title')}
          </h2>
          <p className="cta-subtitle">
            {t('dashboard.cta.subtitle')}
          </p>

          <div className="cta-buttons">
            <button
              className="cta-button volunteer-btn"
              onClick={(e) => handleButtonClick(e,"volunteer")}
            >
              <span className="button-text">{t('dashboard.cta.volunteerBtn')}</span>
              <span className="button-icon">🤝</span>
            </button>

            <button
              className="cta-button contribute-btn"
              onClick={(e) => handleButtonClick(e,"contribute")}
            >
              <span className="button-text">{t('dashboard.cta.contributeBtn')}</span>
              <span className="button-icon">💝</span>
            </button>
          </div>

          <div className="cta-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">सक्रिय स्वयंसेवक</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹2.5Cr+</div>
              <div className="stat-label">कुल दान</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">शहरों में उपस्थिति</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardCTA;
