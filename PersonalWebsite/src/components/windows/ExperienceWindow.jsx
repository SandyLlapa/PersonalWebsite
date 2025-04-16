import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const ExperienceWindow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experience = [
    {
      period: "Summer 2023-2024",
      title: "Software Engineer",
      company: "Tech Corp",
      description: "Developed web applications using React and Node.js",
      highlights: [
        "Led frontend team of 5 developers",
        "Reduced page load time by 40%",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      period: "Spring 2024",
      title: "Software Engineer",
      company: "Tech Corp",
      description: "Developed web applications using React and Node.js",
      highlights: [
        "Led frontend team of 5 developers",
        "Reduced page load time by 40%",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      period: "Summer 2022",
      title: "UX Designer",
      company: "Creative Agency",
      description: "Designed user interfaces for mobile apps",
      highlights: [
        "Created design system",
        "Improved user retention by 25%",
        "Conducted user research"
      ]
    },
    {
      period: "Summer 2021",
      title: "UX Designer",
      company: "Creative Agency",
      description: "Designed user interfaces for mobile apps",
      highlights: [
        "Created design system",
        "Improved user retention by 25%",
        "Conducted user research"
      ]
    }
  ];

  const TabButton = ({ period, isActive, onClick }) => (
    <Motion.button
      className={`period-tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
      // whileHover={{ scale: 1.03 }}
      // whileTap={{
      //   scale: 0.97,
      //   borderRadius: "0px 0px 0px 0px" // Bubble curve effect
      // }}
      // transition={{ 
      //   type: "spring",
      //   stiffness: 300,
      //   damping: 15
      // }}
    >
      {period}
      
      {/* Yellow indicator dot */}
      {isActive && (
        <Motion.div 
          className="bubble-indicator"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.1,
            type: "spring",
            stiffness: 500
          }}
        />
      )}
      
      {/* Bubble background */}
      <div className="bubble-curve" />
    </Motion.button>
  );

  return (
    <div className="experience-container">
      {/* Sidebar with bubble tabs */}
      <div className="sidebar">
        {experience.map((exp, index) => (
          <TabButton
            key={index}
            period={exp.period}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      
      {/* Content area */}
      <div className="content">
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{experience[activeTab].title}</h2>
            <h3>{experience[activeTab].company}</h3>
            <p>{experience[activeTab].description}</p>
            
            <ul className="highlights">
              {experience[activeTab].highlights.map((item, i) => (
                <Motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </Motion.li>
              ))}
            </ul>
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceWindow;