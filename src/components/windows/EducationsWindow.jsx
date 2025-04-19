import React from 'react';
import '/src/styles/windows.css';
import uniIcon from '/src/assets/universityIcon.webp';
import achieveIcon from '/src/assets/achieve.webp';

const EducationsWindow=()=>{
  const classes = [
    {
      id:1,
      title:"Advanced Programming Principles",
      image: '/src/assets/advanceProgram.webp'
    },
    {
      id:2,
      title: "Algorithms & Data Structures",
      image:'/src/assets/algData.webp'
    },
    {
      id:3,
      title:"Artificial Intelligence",
      image:'/src/assets/artificial.webp'
    },
    {
      id:4,
      title:"Discrete Structures",
      image:'/src/assets/discrete.webp'
    },
    {
      id:5,
      title:"Programming Graphics & Games",
      image:'/src/assets/game.webp'
    },
    {
      id:6,
      title:"Internet Programming",
      image:'/src/assets/internet.webp'
    },
    {
      id:7,
      title:"Machine Architecture & Organization",
      image:'/src/assets/machine.webp'
    },
    {
      id:8,
      title:"Operating Systems",
      image:'/src/assets/operating.webp'
    },
    {
      id:9,
      title:"Programming Design & Development",
      image:'/src/assets/programDesign.webp'
    },
    {
      id:10,
      title:"Develop Secure Software Systems",
      image:'/src/assets/secure.webp'
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
              <li>Participated and volunteered in activities in Mi Gente Latinx Student Cultural Center</li>
            </ul>  
          </div>
        </div>
      </div>    
      
      <div className="uniClasses">
        <div className="titleClasses">
          <h3> Relevant Courswork</h3>
        </div>
        <div className="courses-grid">
          {classes.map(course=>(
            <div key={course.id} className="course-card">
              <img src={course.image} className="course-image" alt={course.title}></img>
              <p className="class-label">{course.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default EducationsWindow