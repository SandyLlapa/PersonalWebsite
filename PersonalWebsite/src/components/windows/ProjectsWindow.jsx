import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const ProjectsWindow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Drone Simulation",
      description:`Developed a smart drone delivery simulation with a team, showcasing real-time route visualization, dynamic rerouting for low battery, and support for pathfinding algorithms like A*, Dijkstra, BFS, and DFS. Focused on building an intuitive interface and seamless user interaction. This project reflects my strengths in problem-solving, algorithm design, and creating engaging, interactive systems.`,
      image: "/src/assets/Drone.png",
      tech: ["HTML", "CSS", "JavaScript","C++", "Docker", "Agile Development","UML Design", "Design Patterns" ],
      codeLink: "https://github.com/SandyLlapa/droneSimulation",
      liveLink: "https://hub.docker.com/repository/docker/sandyllapa/drone_sim/general"

    },
    {
      id: 2,
      title: "ThoughtSphere",
      description: "ThoughtSphere is a full-stack social media application where users can create posts, upload images, connect with friends, and interact with shared content. I built the platform with a strong emphasis on user experience and real-time updates, allowing seamless post interactions and profile management. Image uploads are saved and served from a PostgreSQL database, and the UI adapts responsively for desktop views.",
      image: "/src/assets/ThoughtSphere.png",
      tech: ["HTML", "CSS", "JavaScript","PostgreSQL", "Database Management","RESTful API Design", "Authentication & Authorization", "Full-Stack Integration" ],
      codeLink:"https://github.com/SandyLlapa/ThoughtSphere"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "This project is a productivity-focused app that allows users to manage daily tasks through features like task creation, editing, marking completion, and deletion. Users can register accounts, and all tasks are saved securely with SQL safety measures such as prepared statements. The interface is clean and efficient, ideal for everyday task tracking.",
      image: "/src/assets/Checklist.png",
      tech: ["HTML", "CSS", "JavaScript","CRUD Operations", "User Authentication", "Prepared SQL Statements (Security)","Backend Integration", "Database Management " ],
      codeLink: "https://github.com/SandyLlapa/TodoList_v2"

    },
    {
      id: 4,
      title: "Command Line Interpreter from Scratch",
      description: " In this project, I developed a custom Unix-like shell from scratch, capable of parsing and executing user commands, including built-in implementations of cd, ls, and wc. The shell reads user input, creates child processes for command execution, and supports advanced functionalities like input/output redirection (>, <) and piping (|), closely mimicking traditional Unix shell behavior. This project deepened my understanding of low-level system programming, process management, and inter-process communication within the Linux environment.",
      image: "/src/assets/Command_line.png",
      tech: ["C++", "Unix/Linux System Calls", "Process Management (fork, exec, wait)","File System Navigation", "Input/Output Redirection", "Pipes and Inter-Process Communication" , "Command Parsing & Tokenization"],
      codeLink:"https://github.com/SandyLlapa/CommandLine-Interpreter"
    },
    {
      id: 5,
      title: "Weather App",
      description: " This Weather App fetches and displays current weather data for any city using a public API. The app updates dynamically based on user input and shows weather details with corresponding visuals (e.g., icons for sunny, rainy, etc.). I focused on simplicity and speed, using asynchronous API calls and responsive layout design to ensure a smooth user experience.",
      image: "/src/assets/Weather.png",
      tech: ["HTML", "CSS", "JavaScript","API Integration (e.g., OpenWeatherMap API)", "Asynchronous JavaScript (fetch)", "JSON Data Parsing","Error Handling & Validation", "DOM manipulation" ],
      codeLink: "https://github.com/SandyLlapa/Weather-App"
    },
    {
      id: 6,
      title: "Virutal Motion Game",
      description: "An animated character project using real motion capture data from the Carnegie Mellon mocap database. This project brings 3D characters to life with complex dance sequences, real-time animation blending, and scene graph transformations to simulate realistic body movements.",
      image: "/src/assets/Dancing.png",
      tech: ["TypeScript", "React", "Hierarchical Scene Graphs","Motion Capture (MoCap) Data Integration", "Animation Interpolation & Looping", "Event-Driven Interaction for Dynamic Animations"],
      liveLink: "https://csci-4611-spring-2024.github.io/assignment-4-SandyLlapa/"
    },
    {
      id: 7,
      title: "Mine Sweeper",
      description: "A fun twist on the classic Minesweeper game, set in space and built using TypeScript and GopherGfx. This 2D browser-based game features animated graphics, interactive game loops, and real-time user input handling. Players uncover safe zones while avoiding hidden space mines, with smooth animations and responsive feedback enhancing the experience.",
      image: "/src/assets/Minesweeper.png",
      tech: ["React", "TypeScript", "GopherGfx Graphics Library","2D Coordinate Systems & Vectors", "Game Loop Logic", "Event Handling","Animation & User Interaction" ],
      liveLink: "https://csci-4611-spring-2024.github.io/assignment-1-SandyLlapa/"
    },
    {
      id: 8,
      title: "Earthquake Visualization",
      description: "A data visualization tool that displays earthquake events from 1905 to 2007 using real-world geospatial data. The app allows users to toggle between an interactive 2D map view and a 3D textured globe, highlighting earthquake locations across the world. Built using TypeScript and advanced graphics concepts, this project focuses on geospatial rendering and real-time data representation.",
      image: "/src/assets/Earth.png",
      tech: ["TypeScript", "GopherGfx 3D Graphics Library", "Geospatial Data Visualization","3D Mesh Generation & Deformation", "Texture Mapping & Vertex Buffers", "Normal Vectors & Lighting","React" ],
      liveLink:"https://csci-4611-spring-2024.github.io/assignment-3-SandyLlapa/"
    },
    {
      id: 9,
      title: "Ball 'n Hole Game",
      description: "A 3D game inspired by Donut County, where players control a growing hole that swallows nearby objects. Built from scratch using TypeScript and GopherGfx, the game emphasizes smooth 3D animations and plausible physics interactions, offering a fun and engaging gameplay experience.",
      image: "/src/assets/Hole.png",
      tech: ["TypeScript", "React", "JavaScript","GopherGfx 3D Game Engine", "3D Physics Simulation", "Game Loop Architecture","Interactive Game Design" ],
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

            <div className="project-scroll-content">
            
              <div className="project-icon">
                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
              </div>
              

              <div className="project-header">
                <h2>{projects[currentIndex].title}</h2>
              </div>
              
              <p className="project-description">{projects[currentIndex].description}</p>

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
            </div>

          </Motion.div>
        </AnimatePresence>
      </div>

      <button className="arrow-right" onClick={nextCard}>›</button>
    </div>
  );
};

export default ProjectsWindow;
