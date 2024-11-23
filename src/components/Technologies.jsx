import React, { useState } from 'react';
import styles, { layout } from "../style";

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Utility function to detect mobile devices
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const technologies = [
    // Inner Circle - AWS
    {
      name: 'AWS',
      color: '#FF9900',
      baseTransform: 'translate(250,250)',
      hoverTransform: 'translate(250,250)',
      scale: 1.2,
      isCenter: true,
      path: 'M-25,-15 L25,-15 L20,15 L-20,15 Z',
      ring: 'center'
    },
    // Middle Ring
    {
      name: 'Docker',
      color: '#2496ED',
      baseTransform: 'translate(250,175)',
      hoverTransform: 'translate(250,155)',
      path: 'M-20,-15 h40 v30 h-40 Z',
      scale: 0.8,
      ring: 'middle'
    },
    {
      name: 'Git',
      color: '#F05032',
      baseTransform: 'translate(250,325)',
      hoverTransform: 'translate(250,345)',
      path: 'M0,-15 L15,0 L0,15 L-15,0 Z',
      scale: 0.8,
      ring: 'middle'
    },
    // Outer Ring - Frontend
    {
      name: 'React',
      color: '#61DAFB',
      baseTransform: 'translate(250,70)',
      hoverTransform: 'translate(250,50)',
      isReact: true,
      scale: 0.8,
      ring: 'outer'
    },
    {
      name: 'Vue',
      color: '#4FC08D',
      baseTransform: 'translate(350,150)',
      hoverTransform: 'translate(370,150)',
      path: 'M0,0 L15,-25 L30,0 H24 L15,-15 L6,0 Z',
      scale: 0.8,
      ring: 'outer'
    },
    {
      name: 'Angular',
      color: '#DD0031',
      baseTransform: 'translate(430,250)',
      hoverTransform: 'translate(450,250)',
      path: 'M0,20 L-20,-20 L20,-20 Z',
      scale: 0.8,
      ring: 'outer'
    },
    {
      name: 'Node.js',
      color: '#339933',
      baseTransform: 'translate(150,150)',
      hoverTransform: 'translate(130,150)',
      path: 'M0,-20 L20,0 L0,20 L-20,0 Z',
      scale: 0.8,
      ring: 'outer'
    },
    {
      name: 'Python',
      color: '#3776AB',
      baseTransform: 'translate(150,350)',
      hoverTransform: 'translate(130,350)',
      path: 'M-10,-10 C-10,-15 10,-15 10,-10 L10,0 C10,5 -10,5 -10,0 Z',
      scale: 0.8,
      ring: 'outer'
    },
    {
      name: 'Java',
      color: '#F89820',
      baseTransform: 'translate(350,350)',
      hoverTransform: 'translate(370,350)',
      path: 'M0,-15 C15,-5 5,15 0,20 C-5,15 -15,-5 0,-15',
      scale: 0.8,
      ring: 'outer'
    },
    {
      name: 'PostgreSQL',
      color: '#336791',
      baseTransform: 'translate(70,250)',
      hoverTransform: 'translate(50,250)',
      isDatabase: true,
      scale: 0.8,
      ring: 'outer'
    },
    {
      name: 'MongoDB',
      color: '#47A248',
      baseTransform: 'translate(250,430)',
      hoverTransform: 'translate(250,450)',
      path: 'M0,-20 C10,-10 10,10 0,20 C-10,10 -10,-10 0,-20',
      scale: 0.8,
      ring: 'outer'
    }
  ];

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Empower Your Business <br className="sm:block hidden" />
          with Advanced IT Solutions.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Our expert team provides tailored solutions, utilizing the latest in technology to streamline your operations, enhance security, and drive growth. Whether it's software development, data analysis, or cloud infrastructure, we're here to help you succeed.
        </p>
      </div>

      <div id="About" className={`${layout.sectionImg} flex justify-center items-center`}>
        <div className="relative w-full h-full max-w-[500px]">
          <svg 
            viewBox="0 0 500 500" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full"
            style={{ minHeight: '300px' }}
          >
            {/* Circles with pulse animation */}
            <circle 
              cx="250" 
              cy="250" 
              r="180" 
              stroke="rgba(255, 255, 255, 0.1)" 
              strokeWidth="2" 
              fill="none"
              className={`${hoveredTech ? 'animate-pulse' : ''}`}
            />
            <circle 
              cx="250" 
              cy="250" 
              r="100" 
              stroke="rgba(255, 255, 255, 0.1)" 
              strokeWidth="2" 
              fill="none"
              className={`${hoveredTech ? 'animate-pulse' : ''}`}
            />

            {/* Technology Icons */}
            {technologies.map((tech) => {
              const isHovered = hoveredTech === tech.name;
              const transform = isHovered && !isMobileDevice() ? tech.hoverTransform : tech.baseTransform;
              
              return (
                <g 
                  key={tech.name} 
                  transform={`${transform} scale(${tech.scale * (isHovered && !isMobileDevice() ? 1.2 : 1)})`}
                  onMouseEnter={() => !isMobileDevice() && setHoveredTech(tech.name)}
                  onMouseLeave={() => !isMobileDevice() && setHoveredTech(null)}
                  style={{
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                >
                  {tech.isReact ? (
                    <>
                      <circle cx="0" cy="0" r="5" fill={tech.color}/>
                      {[30, 90, 150].map((rotation) => (
                        <ellipse
                          key={rotation}
                          cx="0"
                          cy="0"
                          rx="20"
                          ry="7"
                          stroke={tech.color}
                          fill="none"
                          transform={`rotate(${rotation})`}
                          className={isHovered ? 'animate-spin-slow' : ''}
                        />
                      ))}
                    </>
                  ) : tech.isDatabase ? (
                    <>
                      <circle 
                        cx="0" 
                        cy="0" 
                        r="15" 
                        fill={tech.color}
                        className={isHovered ? 'animate-pulse' : ''}
                      />
                      <rect 
                        x="-12" 
                        y="-15" 
                        width="24" 
                        height="5" 
                        fill={tech.color} 
                        rx="2"
                      />
                    </>
                  ) : (
                    <path 
                      d={tech.path} 
                      fill={tech.color}
                      className={isHovered ? 'animate-bounce-gentle' : ''}
                    />
                  )}
                  
                  <text
                    x="0"
                    y={tech.isCenter ? 25 : 35}
                    fontFamily="Arial"
                    fontSize={tech.isCenter ? "16" : "14"}
                    fill={tech.color}
                    textAnchor="middle"
                    className={`select-none ${isHovered ? 'text-glow' : ''}`}
                    style={{
                      filter: isHovered ? `drop-shadow(0 0 3px ${tech.color})` : 'none'
                    }}
                  >
                    {tech.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Define animations */}
          <style jsx>{`
            @keyframes bounce-gentle {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            .animate-bounce-gentle {
              animation: bounce-gentle 1s ease-in-out infinite;
            }
            
            .animate-spin-slow {
              animation: spin-slow 10s linear infinite;
            }
            
            .text-glow {
              text-shadow: 0 0 10px currentColor;
            }

            /* Add responsive styles */
            @media (max-width: 768px) {
              .tech-stack-container {
                transform: scale(0.8);
              }
            }

            @media (max-width: 480px) {
              .tech-stack-container {
                transform: scale(0.6);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Technologies;