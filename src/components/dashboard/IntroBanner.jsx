import React, { useEffect, useState } from 'react';
import './IntroBanner.css';

const IntroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          हमारे काम की झलक
        </h1>
        <p className={`banner-subline ${isVisible ? 'fade-in-up' : ''}`}>
          हर नंबर एक असली इंसान की कहानी है
        </p>
      </div>
    </section>
  );
};

export default IntroBanner; 