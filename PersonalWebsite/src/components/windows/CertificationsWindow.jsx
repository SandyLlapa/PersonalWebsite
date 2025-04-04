import React from 'react';
import '/src/styles/windows.css';



const CertificationsWindow=()=>{
  const certifications = [
    {
      id: 1,
      title: "AWS Cloud Essentials - Amazon Web Services",
      date: "02/2025",
      description: "Foundational knowledge of AWS Cloud services, including compute, storage, networking, databases, security, and pricing.",
      links:"https://www.credly.com/badges/f87cc97a-b445-4f91-962d-5b1ce1ff4c7e/linked_in_profile",
      image: "/src/assets/cloudCert.webp"
    },
    {
      id: 2,
      title: "AWS Knowledge: Compute – Amazon Web Services",
      date: "02/2025",
      description: "Focused knowledge of AWS Compute concepts, specifically Amazon EC2.",
      links: "https://www.credly.com/badges/82100c13-ebd2-417b-9a8d-29290c551dfc/linked_in_profile",
      image: "/src/assets/computeCert.webp"
    },

    {
      id: 3,
      title: "Back End Development and APIs",
      date: "02/2025",
      description: "Gained proficiency in Node.js and npm to build efficient back-end applications. Learned to develop web APIs using the Express framework, implementing RESTful routing and middleware. Additionally, worked with MongoDB and the Mongoose library to design database schemas and perform CRUD operations. Built a People Finder microservice, demonstrating th ability to create scalable back-end solutions.",
      links: "https://www.freecodecamp.org/certification/Sandy_Llapa/back-end-development-and-apis",
      image: "/src/assets/backend.webp"
    },
    {
      id: 4,
      title: "Front End Development Libraries",
      date: "02/2025",
      description: "Mastered Bootstrap to rapidly build responsive layouts and components, while also learning advanced CSS techniques. Gained proficiency in Sass to write modular, maintainable styles with variables, mixins, and nestings. Strenghtened ability to enhance user interface efficiently using modern front-end tools.",
      links: "https://www.freecodecamp.org/certification/Sandy_Llapa/front-end-development-libraries",
      image: "/src/assets/backend.webp"
    }
  ];


  return(
    <div className="certContainer">

      <div className="cert-grid">
        {certifications.map(cert=>(
          <div key={cert.id} className="cert-card">
            <button className="certLink" onClick={()=>window.location.href= cert.links}>
              <img src={cert.image} className="cert-image"></img>
            </button>

            <div className="certDescription">
              <div className="titleDate">
                <h3 className="certTitle">{cert.title}</h3>
                <span className="cert-date"><i>{cert.date}</i></span>
              </div>
              
              <p className="cert-description">{cert.description}</p>
            </div>
          </div>

        ))}
        
      </div>
    </div>
  )
}





export default CertificationsWindow