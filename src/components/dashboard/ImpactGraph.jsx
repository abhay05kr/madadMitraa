import React, { useEffect, useState, useRef } from 'react';
import './ImpactGraph.css';

const ImpactGraph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const graphData = [
    { month: 'Jan', value: 1200, color: '#3b82f6' },
    { month: 'Feb', value: 1800, color: '#10b981' },
    { month: 'Mar', value: 1500, color: '#f59e0b' },
    { month: 'Apr', value: 2200, color: '#8b5cf6' },
    { month: 'May', value: 2800, color: '#ef4444' },
    { month: 'Jun', value: 3500, color: '#06b6d4' },
    { month: 'Jul', value: 3200, color: '#84cc16' },
    { month: 'Aug', value: 3800, color: '#f97316' },
    { month: 'Sep', value: 4200, color: '#ec4899' },
    { month: 'Oct', value: 4500, color: '#6366f1' },
    { month: 'Nov', value: 4800, color: '#14b8a6' },
    { month: 'Dec', value: 5200, color: '#fbbf24' }
  ];

  const maxValue = Math.max(...graphData.map(d => d.value));

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

  return (
    <section ref={sectionRef} className="impact-graph">
      <div className="graph-container">
        <div className="graph-section">
          <h2 className="graph-title">मासिक प्रगति</h2>
          <div className="graph-wrapper">
            <svg 
              className={`graph-svg ${isVisible ? 'animate-bars' : ''}`}
              viewBox="0 0 800 300" 
              width="100%" 
              height="300"
            >
              {/* Y-axis */}
              <line x1="50" y1="50" x2="50" y2="250" stroke="#e5e7eb" strokeWidth="2" />
              
              {/* X-axis */}
              <line x1="50" y1="250" x2="750" y2="250" stroke="#e5e7eb" strokeWidth="2" />
              
              {/* Grid lines */}
              {[0, 1, 2, 3, 4, 5].map(i => (
                <line 
                  key={i}
                  x1="50" 
                  y1={50 + (i * 40)} 
                  x2="750" 
                  y2={50 + (i * 40)} 
                  stroke="#f3f4f6" 
                  strokeWidth="1"
                />
              ))}
              
              {/* Bars */}
              {graphData.map((data, index) => {
                const barHeight = (data.value / maxValue) * 160;
                const barWidth = 50;
                const x = 80 + (index * 60);
                const y = 250 - barHeight;
                
                return (
                  <g key={index}>
                                         <rect
                       x={x}
                       y={isVisible ? y : 250}
                       width={barWidth}
                       height={isVisible ? barHeight : 0}
                       fill={data.color}
                       className="graph-bar"
                       style={{ 
                         transition: 'all 1.5s ease-out',
                         transitionDelay: `${index * 0.1}s`
                       }}
                     />
                    <text
                      x={x + barWidth / 2}
                      y="270"
                      textAnchor="middle"
                      fill="#6b7280"
                      fontSize="12"
                      fontWeight="500"
                    >
                      {data.month}
                    </text>
                  </g>
                );
              })}
              
              {/* Y-axis labels */}
              {[0, 1, 2, 3, 4, 5].map(i => (
                <text
                  key={i}
                  x="35"
                  y={250 - (i * 40)}
                  textAnchor="end"
                  fill="#6b7280"
                  fontSize="12"
                  fontWeight="500"
                >
                  {(maxValue * i / 5).toLocaleString()}
                </text>
              ))}
            </svg>
          </div>
        </div>
        
        <div className="graph-legend">
          <h3 className="legend-title">महत्वपूर्ण जानकारी</h3>
          <div className="legend-items">
            <div className="legend-item">
              <div className="legend-icon">📈</div>
              <div className="legend-content">
                <h4>सबसे अच्छा महीना</h4>
                <p>दिसंबर - 5,200+ लोगों की मदद</p>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-icon">🎯</div>
              <div className="legend-content">
                <h4>वार्षिक लक्ष्य</h4>
                <p>50,000 लोगों तक पहुंचना</p>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-icon">📊</div>
              <div className="legend-content">
                <h4>औसत मासिक</h4>
                <p>3,200 लोगों की मदद</p>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-icon">🚀</div>
              <div className="legend-content">
                <h4>वृद्धि दर</h4>
                <p>महीने-दर-महीने 15% बढ़ोतरी</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactGraph; 