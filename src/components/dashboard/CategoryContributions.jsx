import React, { useEffect, useState, useRef } from 'react';
import './CategoryContributions.css';

const CategoryContributions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = [
    {
      id: 1,
      icon: '📚',
      name: 'शिक्षा',
      count: '800+',
      target: 1000,
      current: 800,
      color: '#3b82f6',
      bgColor: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)'
    },
    {
      id: 2,
      icon: '🍱',
      name: 'भोजन',
      count: '23,450+',
      target: 25000,
      current: 23450,
      color: '#f59e0b',
      bgColor: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'
    },
    {
      id: 3,
      icon: '🏥',
      name: 'स्वास्थ्य',
      count: '890+',
      target: 1200,
      current: 890,
      color: '#10b981',
      bgColor: 'linear-gradient(135deg, #dcfce7 0%, #86efac 100%)'
    },
    {
      id: 4,
      icon: '🏠',
      name: 'आवास',
      count: '450+',
      target: 600,
      current: 450,
      color: '#8b5cf6',
      bgColor: 'linear-gradient(135deg, #f3e8ff 0%, #c4b5fd 100%)'
    },
    {
      id: 5,
      icon: '👕',
      name: 'कपड़े',
      count: '1,200+',
      target: 1500,
      current: 1200,
      color: '#ef4444',
      bgColor: 'linear-gradient(135deg, #fee2e2 0%, #fca5a5 100%)'
    },
    {
      id: 6,
      icon: '🐾',
      name: 'पशु कल्याण',
      count: '320+',
      target: 500,
      current: 320,
      color: '#06b6d4',
      bgColor: 'linear-gradient(135deg, #cffafe 0%, #67e8f9 100%)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="category-contributions">
      <div className="contributions-container">
        <h2 className="contributions-title">श्रेणी-वार योगदान</h2>
        <p className="contributions-subtitle">
          हमारे प्रयासों का विभिन्न क्षेत्रों में वितरण
        </p>
        
        <div className="categories-grid">
          {categories.map((category, index) => {
            const progressPercentage = (category.current / category.target) * 100;
            
            return (
              <div 
                key={category.id}
                className={`category-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: category.bgColor
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-content">
                  <h3 className="category-name">{category.name}</h3>
                  <div className="category-count">{category.count}</div>
                  <div className="progress-container">
                    <div className="progress-bar">
                                             <div 
                         className="progress-fill"
                         style={{ 
                           width: isVisible ? `${progressPercentage}%` : '0%',
                           backgroundColor: category.color,
                           transition: 'width 1.5s ease-out',
                           transitionDelay: `${index * 0.1 + 0.5}s`
                         }}
                       ></div>
                    </div>
                    <span className="progress-text">
                      {Math.round(progressPercentage)}% पूर्ण
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryContributions; 