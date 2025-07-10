import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './FutureGoals.css';

const FutureGoals = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const goals = [
    {
      id: 1,
      titleKey: 'dashboard.futureGoals.goals.shelter.title',
      descriptionKey: 'dashboard.futureGoals.goals.shelter.description',
      target: '₹50 लाख',
      status: 'Planning',
      icon: '🏠',
      color: '#3b82f6'
    },
    {
      id: 2,
      titleKey: 'dashboard.futureGoals.goals.medical.title',
      descriptionKey: 'dashboard.futureGoals.goals.medical.description',
      target: '₹75 लाख',
      status: 'In Progress',
      icon: '🚑',
      color: '#10b981'
    },
    {
      id: 3,
      titleKey: 'dashboard.futureGoals.goals.education.title',
      descriptionKey: 'dashboard.futureGoals.goals.education.description',
      target: '₹1 करोड़',
      status: 'Launching Soon',
      icon: '🎓',
      color: '#f59e0b'
    },
    {
      id: 4,
      titleKey: 'dashboard.futureGoals.goals.foodBank.title',
      descriptionKey: 'dashboard.futureGoals.goals.foodBank.description',
      target: '₹30 लाख',
      status: 'Planning',
      icon: '🏪',
      color: '#8b5cf6'
    },
    {
      id: 5,
      titleKey: 'dashboard.futureGoals.goals.training.title',
      descriptionKey: 'dashboard.futureGoals.goals.training.description',
      target: '₹20 लाख',
      status: 'In Progress',
      icon: '👥',
      color: '#ef4444'
    },
    {
      id: 6,
      titleKey: 'dashboard.futureGoals.goals.emergency.title',
      descriptionKey: 'dashboard.futureGoals.goals.emergency.description',
      target: '₹40 लाख',
      status: 'Planning',
      icon: '🚨',
      color: '#06b6d4'
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Planning':
        return '#6b7280';
      case 'In Progress':
        return '#f59e0b';
      case 'Launching Soon':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  return (
    <section ref={sectionRef} className="future-goals">
      <div className="goals-container">
        <h2 className="goals-title">{t('dashboard.futureGoals.title')}</h2>
        <p className="goals-subtitle">
          {t('dashboard.futureGoals.subtitle')}
        </p>
        
        <div className="goals-scroll-container">
          <div className="goals-grid">
            {goals.map((goal, index) => (
              <div 
                key={goal.id}
                className={`goal-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderColor: goal.color
                }}
              >
                <div className="goal-header">
                  <div className="goal-icon" style={{ color: goal.color }}>
                    {goal.icon}
                  </div>
                  <div 
                    className={`goal-status ${goal.status === 'In Progress' ? 'pulse' : ''}`}
                    style={{ 
                      backgroundColor: getStatusColor(goal.status),
                      borderColor: goal.status === 'In Progress' ? goal.color : 'transparent'
                    }}
                  >
                    {goal.status}
                  </div>
                </div>
                
                <div className="goal-content">
                  <h3 className="goal-title">{t(goal.titleKey)}</h3>
                  <p className="goal-description">{t(goal.descriptionKey)}</p>
                  <div className="goal-target">
                    <span className="target-label">{t('dashboard.futureGoals.target')}:</span>
                    <span className="target-value">{goal.target}</span>
                  </div>
                </div>
                
                {goal.status === 'In Progress' && (
                  <div className="goal-glow" style={{ borderColor: goal.color }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGoals; 