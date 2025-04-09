import React from 'react';
import '/src/styles/windows.css';
import uniIcon from '/src/assets/universityIcon.webp';
import achieveIcon from '/src/assets/achieve.webp';
import advancedProgramming from '/src/assets/advanceProgram.webp';
import algData from '/src/assets/algData.webp';
import artificial from '/src/assets/artificial.webp';
import discrete from '/src/assets/discrete.webp';
import game from '/src/assets/game.webp';
import internet from '/src/assets/internet.webp';
import machine from '/src/assets/machine.webp';
import operating from '/src/assets/operating.webp';
import programDesign from '/src/assets/programDesign.webp';
import secure from '/src/assets/secure.webp';



const EducationsWindow=()=>{

  const classes = [
    {
      id:1,
      title:"Advanced Programming Principles",
      image: {advancedProgramming}
    },
    {
      id:2,
      title: "Algorithms & Data Structures",
      image:{algData}
    },
    {
      id:3,
      title:"Artificial Intelligence",
      image:{artificial}
    },
    {
      id:4,
      title:"Discrete Structures",
      image:{discrete}
    },
    {
      id:5,
      title:"Programming Graphics & Games",
      image:{game}
    },
    {
      id:6,
      title:"Internet Programming",
      image:{internet}
    },
    {
      id:7,
      title:"Machine Architecture & Organization",
      image:{machine}
    },
    {
      id:8,
      title:"Operating Systems",
      image:{operating}
    },
    {
      id:9,
      title:"Programming Design & Development",
      image:{programDesign}
    },
    {
      id:10,
      title:"Develop Secure Software Systems",
      image:{secure}
    }
  ]

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

      <div className="secondRowEdu">

        <div className="uniDate">
          
          <h3 className="titleDate">Graduated</h3>

          <div className="calendar">
            <div className="month">
              <h3>Dec</h3>
            </div>

            <div className="year">
              <h3>2024</h3>
            </div>
          </div>
        </div>

        <div className="achievements">
          <div className="achieveImg">
            <img className="achieveIcon" src={achieveIcon}></img>
          </div>
          <div className="achieveContent">
            <h3>Achievements</h3>
            <ul>
              <li>Earned Full-tuition coverage through competitive scholarships</li>
              <li>Dean's List: Spring 2022 & 2023  </li>
              <li>Volunteer tutor in Spring 2024</li>
            </ul>  
          </div>
        </div>
      </div>    

        

      

      <div className="uniClasses">
        <h3 className="titleClasees"> Relevant Courswork</h3>
        {classes.map(course=>(
          <div key={course.id} className="class-app">
            <img src={course.image} className="course-image"></img>



          </div>
        ))}
      </div>



    </div>

  )
}

export default EducationsWindow