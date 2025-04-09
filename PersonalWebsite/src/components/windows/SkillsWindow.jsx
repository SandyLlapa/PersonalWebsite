import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Language } from '@mui/icons-material';

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


  return (

    <div className="skillContainer">

      <div className="languages">

        <div className="langs-grid">
          {langs.map(lang =>(
            <div key={lang.id} className="lang-card">
              <img src={lang.image} className="lang-image" alt={lang.title}></img>
              <p className="class-label">{lang.title}</p>

              <Box sx={{ mt: 1 }}>
                <Rating 
                  className="custom-rating" 
                  name={`rating-${lang.id}`} 
                  value={lang.rating}  
                  onChange={(event, newValue) =>handleRatingChange(lang.id, newValue)} 
                  sx={{'& .MuiRating-icon': {
                  stroke: '#ffff',        // Outline color
                  strokeWidth: 1.1       // Outline thickness
                  }}} 
                readOnly/>
              </Box>
            </div>
          ))}

        </div>



        
      </div>

      
    </div>





    
  );



}



export default SkillsWindow