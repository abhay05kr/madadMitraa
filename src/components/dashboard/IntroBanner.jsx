import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './IntroBanner.css';

const IntroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="intro-banner">
      <div className="banner-background">
        <div className="animated-overlay"></div>
      </div>
      <div className="banner-content">
        <h1 className={`banner-heading ${isVisible ? 'fade-in-down' : ''}`}>
          {t('dashboard.intro.title')}
        </h1>
        <p className={`banner-subline ${isVisible ? 'fade-in-up' : ''}`}>
          {t('dashboard.intro.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default IntroBanner; 