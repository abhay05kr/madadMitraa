import React, { useEffect, useState, useRef } from 'react';
import './LiveCounters.css';

const LiveCounters = () => {
  const [counters, setCounters] = useState([
    { id: 1, icon: '🍱', label: 'खाना पहुँचाया गया', target: 23450, current: 0, suffix: '+' },
    { id: 2, icon: '🧒', label: 'बच्चों की मदद', target: 5670, current: 0, suffix: '+' },
    { id: 3, icon: '🏥', label: 'मेडिकल केस', target: 890, current: 0, suffix: '+' },
    { id: 4, icon: '👥', label: 'स्वयंसेवक', target: 450, current: 0, suffix: '+' }
  ]);
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    if (!isVisible) return;

    const intervals = counters.map((counter, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = counter.target / steps;
      let step = 0;

      return setInterval(() => {
        step++;
        setCounters(prev => prev.map((c, i) => 
          i === index 
            ? { ...c, current: Math.min(c.target, Math.floor(step * increment)) }
            : c
        ));

        if (step >= steps) {
          clearInterval(intervals[index]);
        }
      }, duration / steps);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isVisible, counters]);

  return (
    <section ref={sectionRef} className="live-counters">
      <div className="counters-container">
        <div className="counters-header">
          <h2 className="counters-title">Live Counters</h2>
          <p className="counters-subtitle">Tracking key metrics in real-time.</p>
        </div>
        
        <div className="counters-grid">
          {counters.map((counter, index) => (
            <div 
              key={counter.id} 
              className={`counter-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="counter-icon">{counter.icon}</div>
              <div className="counter-number">
                {counter.current.toLocaleString()}{counter.suffix}
              </div>
              <div className="counter-label">{counter.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveCounters; 