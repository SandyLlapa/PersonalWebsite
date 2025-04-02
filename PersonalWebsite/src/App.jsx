import { useState } from 'react'
import bitmap from './assets/bitmap.webp'
import './App.css'

function App() {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const folders = [
    { id: 1, name: 'Projects', content: 'Projects content here' },
    { id: 2, name: 'Experience', content: 'Experience go here' },
    { id: 3, name: 'Skills', content: 'Skills go here' },
    { id: 4, name: 'Certifications', content: 'Certs go here' },
    { id: 5, name: 'Education', content: 'Education go here' },
    { id: 6, name: 'Resume', content:'Resume go here'},
    { id: 7, name: 'AboutMe', content:'About me go here'}
  ];

  const openFolder=(folder)=>{
    setWindows(prev=>[
      ...prev,
      {
        id: Date.now(),
        folderId: folder.id,
        title: folder.name,
        content: folder.content,
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


        <div className="contactApps"></div>
      </div>

    </div>
  );
};

export default App
