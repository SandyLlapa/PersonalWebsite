import { useState } from 'react'
import bitmap from './assets/bitmap.webp'
import github from './assets/githubv2.webp'
import email from './assets/email.webp'
import linkedin from './assets/linkedin.webp'
import CertificationWindow from './components/windows/CertificationsWindow.jsx';
import AboutMeWindow from './components/windows/AboutMeWindow.jsx';
import EducationsWindow from './components/windows/EducationsWindow.jsx';
import ResumeWindow from './components/windows/ResumeWindow.jsx';
import SkillsWindow from './components/windows/SkillsWindow.jsx';
import ProjectsWindow from './components/windows/ProjectsWindow.jsx';
import ExperienceWindow from './components/windows/ExperienceWindow.jsx';
import './App.css'

function App() {
  const [windows, setWindows] = useState([{
    id: Date.now(),
    folderId: 7, // AboutMe's ID
    title: 'AboutMe',
    content: <AboutMeWindow />,
    position: {
      x: 400 + (Math.random() * 200),
      y: Math.random() * 200
    },
    zIndex: 1
  }]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [highestZIndex, setHighestZIndex] = useState(2);

  const folders = [
    { id: 1, name: 'Projects', content: <ProjectsWindow /> },
    { id: 2, name: 'Experience', content: <ExperienceWindow /> },
    { id: 3, name: 'Skills', content: <SkillsWindow />},
    { id: 4, name: 'Certifications', content: <CertificationWindow />},
    { id: 5, name: 'Education', content: <EducationsWindow />},
    { id: 6, name: 'Resume', content: <ResumeWindow />},
    { id: 7, name: 'AboutMe', content: <AboutMeWindow />}
  ];

  const openFolder=(folder)=>{

    let windowContent;

    switch(folder.id){

      case 1:
        windowContent = < ProjectsWindow/>;
        break;

      case 2:
        windowContent =  <ExperienceWindow />;
        break;
      
      case 3:
        windowContent = <SkillsWindow />;
        break;

      case 4: 
        windowContent = <CertificationWindow />;
        break;

      case 5: 
        windowContent = <EducationsWindow />;
        break;
      
      case 6:
        windowContent = <ResumeWindow />;
        break;

      case 7:
        windowContent = <AboutMeWindow />;
        break;

    }

    setWindows(prev=>[
      ...prev,
      {
        id: Date.now(),
        folderId: folder.id,
        title: folder.name,
        content: windowContent,
        position: {
          x: 400+(Math.random()*200),
          y: Math.random()*200
        },
        zIndex: highestZIndex +1

      }
    ]);
    setHighestZIndex(highestZIndex+1);
  };

  const closeWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };
  
  const handleMouseDown = (event, id) => {
    setWindows(prev =>
      prev.map(win =>
        win.id === id ? {...win, zIndex: highestZIndex + 1} : win
      )
    );

    setHighestZIndex(highestZIndex + 1);

    setActiveWindow({id, offsetX: event.clientX, offsetY: event.clientY});
  };

  const handleMouseMove=(event)=>{
    if(!activeWindow) return;

    setWindows((prev)=>
      prev.map((win)=>
        win.id === activeWindow.id
          ? {
              ...win,
              position: {
                x: win.position.x + (event.clientX - activeWindow.offsetX),
                y: win.position.y + (event.clientY - activeWindow.offsetY)
              }
            }
        : win
      )
    );

    setActiveWindow( (prev) => ({
      ...prev,
      offsetX: event.clientX,
      offsetY: event.clientY
    }));

  };


  const handleMouseUp = () => {
    setActiveWindow(null);
  };

  return (
    <div className="container" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div id="folderGrid">
        {folders.map((folder) => (
          <div key={folder.id} className="folderIcon" onClick={() => openFolder(folder)}>
            <img src={bitmap} alt="Folder" className="Folder" />
            <p className="folder-label">{folder.name}</p>
          </div>
        ))}
      </div>

      {windows.map((window) => (
        <div
          key={window.id}
          className="window"
          style={{
            left: `${window.position.x}px`,
            top: `${window.position.y}px`,
            zIndex: window.zIndex
          }}
        >
          <div className="windowHeader" onMouseDown={(e) => handleMouseDown(e, window.id)}>
            <h3>{window.title}</h3>
            <button className="close" onClick={() => closeWindow(window.id)}>X</button>
          </div>

          <div className="windowContent">{window.content}</div>
        </div>
      ))}

      <div className="bottom">


        <div className="contactApps">
          <button className="tooltip-container" onClick={()=>window.location.href="https://github.com/SandyLlapa"}>
            <img src={github} alt="Github" className="GitHub" />
            <span className="tooltip">GitHub</span>
          </button>
          <button className="tooltip-container" onClick={()=>window.location.href="https://www.linkedin.com/in/sandyllapa/"}>
            <img src={linkedin} alt="Linkedin" className="Linkedin" />
            <span className="tooltip">Linkedin</span>
          </button>
          <button className="tooltip-container" onClick={() => window.location.href = "mailto:sandyllapa@gmail.com"}>
            <img src={email} alt="Email" className="Email" />
            <span className="tooltip">Email</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default App
