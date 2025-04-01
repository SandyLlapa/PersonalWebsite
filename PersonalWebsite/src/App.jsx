import { useState } from 'react'
import bitmap from './assets/bitmap.webp'
import './App.css'

function App() {
  const [windows, setWindows] = useState([]);
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
        id:Date.now(),
        folderId:folder.id,
        title: folder.name,
        content: folder.content,
        position:{
          x:Math.random()*200,
          y:Math.random()*200
        }

      }
    ]);
  };

  const closeWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };


  return (
    <>
      <div id="folderGrid">
        {folders.map(folder=>(

          <div key={folder.id} className="folderIcon" onClick={()=>openFolder(folder)}>
            <img src={bitmap} alt=" Folder" className="Folder"></img>
          </div>
        ))}
      </div>

      {windows.map(window=>(
        <div key={window.id} className="window" style={{left:`${window.position.x}px`,top:`${window.position.y}px`,zIndex:windows.findIndex(w=>w.id===window.id)+1}}>
          <div className="windowHeader">
            <h3>{window.title}</h3>
            <button className="close" onClick={()=>closeWindow(window.id)}>X</button>
          </div>

          <div className="windowContent">{window.content}</div>
        </div>
      ))}

    </>
  );
};

export default App
