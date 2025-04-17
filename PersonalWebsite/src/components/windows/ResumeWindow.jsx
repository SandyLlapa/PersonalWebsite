import React from 'react';

const ResumeWindow = () => {
  return (
    <div className="resume-window">

      <iframe 
        src="/src/assets/SandyLlapa-Resume2025.pdf" 
        title="Sandy Llapa Resume"
        width="100%" 
        height="600px"
        style={{ borderRadius: "8px" }}
      />

      
      <div style={{ marginTop: '1rem' }}>
        <a 
          href="/src/assets/SandyLlapa-Resume2025.pdf" 
          download 
          className="download-btn"
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default ResumeWindow;
