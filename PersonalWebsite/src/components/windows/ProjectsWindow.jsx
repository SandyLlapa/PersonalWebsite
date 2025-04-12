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
      image: "/src/assets/Drone.png"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Current weather by city using a weather API.",
      image: "/path/to/image2.jpg"
    },
    {
      id: 3,
      title: "ThoughtSphere",
      description: "Social media app with image posts and friend management.",
      image: "/path/to/image3.jpg"
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
              <h1>{projects[currentIndex].title}</h1>
            </div>
            
            <p>{projects[currentIndex].description}</p>
          </Motion.div>
        </AnimatePresence>
      </div>

      <button className="arrow-right" onClick={nextCard}>›</button>
    </div>
  );
};

export default ProjectsWindow;
