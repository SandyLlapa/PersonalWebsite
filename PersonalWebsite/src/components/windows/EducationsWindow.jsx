import React from 'react';
import '/src/styles/windows.css';
import uniIcon from '/src/assets/universityIcon.webp';


const EducationsWindow=()=>{

  return(
    <div className="eduContainer">

      <div className="uniCard">
        <div className="uniImg">
          <img className="universityIcon" src={uniIcon}></img>
        </div>
        
        <div className="uniTitle">
          
          <h3>University of Minnesota - Twin Cities</h3>
          <p>College of Science and Engineering</p>
          <p><i>B.S in Computer Science</i></p>
        </div>

      </div>

      <div className="uniDate">
        
        <h3 className="titleDate">Graduated</h3>

        <div className="month">
          <h3>Dec</h3>
        </div>

        <div className="year">
          <h3>2024</h3>
        </div>
        

      </div>
    </div>

  )
}

export default EducationsWindow