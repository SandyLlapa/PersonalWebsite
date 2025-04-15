import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const ProjectsWindow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Drone Simulation",
      description: "Interactive drone routing with A* and Dijkstra.",
      image: "/src/assets/Drone.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      codeLink: "https://github.com/SandyLlapa/droneSimulation",
      liveLink: "https://hub.docker.com/repository/docker/sandyllapa/drone_sim/general"

    },
    {
      id: 2,
      title: "ThoughtSphere",
      description: "Social media app with image posts and friend management.",
      image: "/src/assets/ThoughtSphere.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      codeLink:"https://github.com/SandyLlapa/ThoughtSphere"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Social media app with image posts and friend management.",
      image: "/src/assets/Checklist.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      codeLink: "https://github.com/SandyLlapa/TodoList_v2"

    },
    {
      id: 4,
      title: "Command Line Interpreter from Scratch",
      description: "Social media app with image posts and friend management.",
      image: "/src/assets/Command_line.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      codeLink:"https://github.com/SandyLlapa/CommandLine-Interpreter"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Current weather by city using a weather API.",
      image: "/src/assets/Weather.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      codeLink: "https://github.com/SandyLlapa/Weather-App"
    },
    {
      id: 6,
      title: "Virutal Motion Game",
      description: "Current weather by city using a weather API.",
      image: "/src/assets/Dancing.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      liveLink: "https://csci-4611-spring-2024.github.io/assignment-4-SandyLlapa/"
    },
    {
      id: 7,
      title: "Mine Sweeper",
      description: "Current weather by city using a weather API.",
      image: "/src/assets/Minesweeper.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      liveLink: "https://csci-4611-spring-2024.github.io/assignment-1-SandyLlapa/"
    },
    {
      id: 8,
      title: "Earthquake Visualization",
      description: "Current weather by city using a weather API.",
      image: "/src/assets/Earth.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      liveLink:"https://csci-4611-spring-2024.github.io/assignment-3-SandyLlapa/"
    },
    {
      id: 9,
      title: "Ball 'n Hole Game",
      description: "Current weather by city using a weather API.",
      image: "/src/assets/Hole.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      liveLink: "https://csci-4611-spring-2024.github.io/assignment-2-SandyLlapa/"
    }
  ];

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <div className="projects-carousel">
      <button className="arrow-left" onClick={prevCard}>‹</button>

      <div className="project-wrapper">
        <AnimatePresence custom={direction} mode="wait">
          <Motion.div
            key={projects[currentIndex].id}
            className="project-card"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            
            <div className="project-icon">
              <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
            </div>
            

            <div className="project-header">
              <h2>{projects[currentIndex].title}</h2>
            </div>
            
            <p>{projects[currentIndex].description}</p>

            <div className="tech-stack">
              {projects[currentIndex].tech.map((item, index) => (
                <span key={index} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={projects[currentIndex].codeLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                View Code
              </a>
              {projects[currentIndex].liveLink && (
                <a href={projects[currentIndex].liveLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                  Live Demo
                </a>
              )}
            </div>


          </Motion.div>
        </AnimatePresence>
      </div>

      <button className="arrow-right" onClick={nextCard}>›</button>
    </div>
  );
};

export default ProjectsWindow;
