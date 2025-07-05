import React, { useEffect, useState, useRef } from 'react';
import './FutureGoals.css';

const FutureGoals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const goals = [
    {
      id: 1,
      title: 'नया पशु आश्रय',
      description: '500+ जानवरों के लिए आधुनिक आश्रय स्थल',
      target: '₹50 लाख',
      status: 'Planning',
      icon: '🏠',
      color: '#3b82f6'
    },
    {
      id: 2,
      title: 'मोबाइल मेडिकल यूनिट',
      description: 'दूरस्थ क्षेत्रों में स्वास्थ्य सेवाएं',
      target: '₹75 लाख',
      status: 'In Progress',
      icon: '🚑',
      color: '#10b981'
    },
    {
      id: 3,
      title: 'शैक्षिक केंद्र',
      description: '1000+ बच्चों के लिए डिजिटल लर्निंग सेंटर',
      target: '₹1 करोड़',
      status: 'Launching Soon',
      icon: '🎓',
      color: '#f59e0b'
    },
    {
      id: 4,
      title: 'खाद्य बैंक नेटवर्क',
      description: '10 नए शहरों में खाद्य वितरण केंद्र',
      target: '₹30 लाख',
      status: 'Planning',
      icon: '🏪',
      color: '#8b5cf6'
    },
    {
      id: 5,
      title: 'स्वयंसेवक प्रशिक्षण',
      description: '500+ युवाओं को कौशल विकास प्रशिक्षण',
      target: '₹20 लाख',
      status: 'In Progress',
      icon: '👥',
      color: '#ef4444'
    },
    {
      id: 6,
      title: 'आपातकालीन राहत',
      description: 'प्राकृतिक आपदाओं के लिए तैयारी केंद्र',
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
        <h2 className="goals-title">भविष्य की योजनाएँ</h2>
        <p className="goals-subtitle">
          हमारे आगामी लक्ष्य और उपलब्धियां
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
                  <h3 className="goal-title">{goal.title}</h3>
                  <p className="goal-description">{goal.description}</p>
                  <div className="goal-target">
                    <span className="target-label">लक्ष्य:</span>
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