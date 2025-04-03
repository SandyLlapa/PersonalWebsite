import React from 'react';
import '/src/styles/windows.css';



const CertificationsWindow=()=>{
  const certifications = [
    {
      id: 1,
      title: "AWS Cloud Essentials - Amazon Web Services",
      date: "02/2025",
      description: "Foundational knowledge of AWS Cloud services, including compute, storage, networking, databases, security, and pricing.",
      links: {website: "https://www.credly.com/badges/f87cc97a-b445-4f91-962d-5b1ce1ff4c7e/linked_in_profile"},
      image: "/src/assets/image.png"
    },
    {
      id: 2,
      title: "AWS Knowledge: Compute – Amazon Web Services",
      date: "02/2025",
      description: "Focused knowledge of AWS Compute concepts, specifically Amazon EC2.",
      links: {website: "https://www.credly.com/badges/82100c13-ebd2-417b-9a8d-29290c551dfc/linked_in_profile"}
    }

  ];


  return(
    <div className="certContainer">

      <div className="cert-grid">
        {certifications.map(cert=>(
          <div key={cert.id} className="cert-card">
            <h3>{cert.title}</h3>
            <span className="cert-date">{cert.date}</span>
            <img src={cert.image} className="cert-image"></img>
            <p className="cert-description">{cert.description}</p>
            <a 
              href={cert.links.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cert-link"
            >View Credential</a>
          </div>

        ))}
        
      </div>
    </div>
  )
}





export default CertificationsWindow