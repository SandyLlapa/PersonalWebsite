import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const SkillsWindow=()=>{
  const [langs,setLangs]= useState([
    {
      id:1,
      title:"C ++",
      image: '/src/assets/cplus.webp',
      rating:4
    },
    {
      id:2,
      title: "C",
      image:'/src/assets/cprogramming.webp',
      rating:4
    },
    {
      id:3,
      title:"CSS",
      image:'/src/assets/css.webp',
      rating:4
    },
    {
      id:4,
      title:"HTML",
      image:'/src/assets/html.webp',
      rating:5
    },
    {
      id:5,
      title:"Java",
      image:'/src/assets/java.webp',
      rating:4
    },
    {
      id:6,
      title:"JavaScript",
      image:'/src/assets/javascript.webp',
      rating:5
    },
    {
      id:7,
      title:"Python",
      image:'/src/assets/python.webp',
      rating:4
    },
    {
      id:8,
      title:"TypeScript",
      image:'/src/assets/typescript.webp',
      rating:3
    }
  ]);

  const handleRatingChange = (id, newValue) => {
    setLangs(prev =>
      prev.map(lang =>
        lang.id === id ? { ...lang, rating: newValue } : lang
      )
    );
  };

  const [activeTab, setActiveTab] = useState('technical');
  const tabContent={
    technical:(
      <ul className="skills-list">
        <li><strong>Frameworks & Libraries:</strong> React.js, Node.js, Express.js, Bootstrap</li>
        <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
        <li><strong>Developer Tools:</strong> Git, Github, Docker, Visual Studio Code, Atom, Unit Testing, Debugging</li>
        <li><strong>Data & Web Technologies:</strong> XML, JSON, HTTP, REST APIs</li>
        <li><strong>Software Development:</strong> Agile, Scrum, Design Patterns, OOP</li>
      </ul>
    ),
    other:(
      <ul className="skill-list">
        <li>Project Management</li>
        <li>Software Documentation</li>
        <li>Problem-Solving</li>
        <li>Communication</li>
        <li>Attention to Detail</li>
        <li>Teamwork</li>
        <li>Creativity</li>
      </ul>
    )
  };

  return (
    <div className="skillContainer">
      <div className="languages">
        <div className="lang-header">
          <h3>Technical Language</h3>
          <h3>Proficiency</h3>
        </div>
        <div className="langs-grid">
          {langs.map(lang =>(
            <div key={lang.id} className="lang-card">
              <div className="lang-left">
                <img src={lang.image} className="lang-image" alt={lang.title}></img>
                <p className="class-label">{lang.title}</p>
              </div>
              <div className="lang-right">
                <Box sx={{ mt: 1 }} className="proficiency">
                  <Rating 
                    className="custom-rating"
                    size="large"
                    name={`rating-${lang.id}`} 
                    value={lang.rating}  
                    onChange={(event, newValue) =>handleRatingChange(lang.id, newValue)} 
                    sx={{'& .MuiRating-icon': {
                      stroke: '#ffff',       
                      strokeWidth: 0.8      
                    }}} 
                  readOnly/>
                </Box>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tabs-container">
          <div className="tab-headers">
            <button className={`tab ${activeTab === 'technical' ? 'active' : ''}`} onClick={() => setActiveTab('technical')}>
              <h3>Technical Skills</h3>
            </button>
            <button className={`tab ${activeTab === 'other' ? 'active' : ''}`} onClick={() => setActiveTab('other')}>
              <h3>Other Skills</h3>
            </button>
          </div>
          <div className="tab-content">
            {tabContent[activeTab]}
          </div>
      </div>
    </div>
  );
}
export default SkillsWindow