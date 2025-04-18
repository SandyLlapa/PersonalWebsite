import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const ExperienceWindow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experience = [
    {
      period: "Summer 2023-2024",
      title: "Childcare Provider",
      company: "Self-employed",
      description: 'As a dedicated Childcare Provider, I was responsible for ensuring the well-being and safety of children under my care, meeting all their physical, emotional, and educational needs. I proactively networked with families to secure babysitting opportunities, always adhering to the specific guidelines and rules set by parents. To foster a nurturing learning environment, I personally invested in age-appropriate educational materials and engaged children with activities tailored to their developmental stage. In addition to supervising playtime, I provided academic support by assisting with school homework and creating educational exercises. I also took the initiative to teach English to Spanish-speaking children and introduced basic Spanish vocabulary to children learning the language. Throughout my time in this role, I maintained a vigilant focus on safety and ensured that all activities were conducted in a secure and hazard-free environment.',
      highlights: [
        "Childcare & Development",
        "Academic Support (Homework Assistance)",
        "Language Instruction (English/Spanish)",
        "Educational Material Preparation",
        "Safety & Supervision",
        "Communication & Relationship Building",
        "Time Management & Organization",
        "Networking & Client Relationship Management"
      ]
    },
    {
      period: "Spring 2024",
      title: "Volunteer Tutor",
      company: "University of Minnesota - Twin Cities",
      description: 'As a Volunteer Tutor, I assisted students with software and security-related questions, focusing on tools and concepts that were difficult for many, such as American Fuzzy Lop (AFL), GDB, and hex editors. With limited in-class guidance, I took the initiative to self-learn these tools and shared my knowledge with peers, helping them navigate the complexities of debugging and reverse engineering. I also provided instruction on memory-related security vulnerabilities, explaining how the memory layout of a program could expose weaknesses and lead to exploits. In addition to hands-on guidance in class, I supported students by answering questions efficiently via email, ensuring they had the resources and understanding needed to succeed. My role allowed me to foster a deeper understanding of software security and debugging techniques among my peers.',
      highlights: [
        "Software Debugging (GDB, AFL)",
        "Security Vulnerability Identification",
        "Memory Layout & Exploits",
        "Peer Instruction & Tutoring",
        "Problem Solving & Troubleshooting",
        "Efficient Communication (Email Support)",
        "Self-Learning & Knowledge Sharing",
        "Collaboration & Mentorship"
      ]
    },
    {
      period: "Summer 2022",
      title: "Lab Assembler",
      company: "Company: Johnstech International",
      description: 'As a Lab Assembler, I was responsible for inspecting semiconductor blades to ensure they met strict quality standards before preparing them for vendor delivery. This involved careful visual inspection of each blade and placing them neatly onto gel packs in a clean, dust-free environment. I also handled labeling by printing and verifying order information, and maintained accurate documentation for every completed order. When high-priority orders came in, I would immediately assist coworkers to ensure timely fulfillment. After inspection and documentation, I transferred orders to the packaging team. I followed cleanroom protocols by wearing protective gear to maintain a sanitized workspace. In addition to blade inspection, I cut, inspected, and packaged elastomers for semiconductor applications, ensuring consistency and quality across all materials. Throughout my time in this role, I maintained a spotless record with no quality complaints or packaging errors.',
      highlights: [
        "Quality Inspection",
        "Cleanroom Protocols & Sanitation Standards",
        "Semiconductor Blade & Elastomer Handling",
        "Order Documentation & Labeling",
        "Team Collaboration & Task Prioritization",
        "Attention to Detail",
        "Time Management",
        "Reliability & Accountability",
        "Manual Dexterity for Precision Assembly"
      ]
    },
    {
      period: "Summer 2021",
      title: "Lab Assistant Internship",
      company: "Company: Johnstech International",
      description: 'In my role at the Test Lab, I was responsible for supporting ongoing life cycle testing by photographing service intervals and test components using high-precision imaging tools such as Scanning Electron Microscopes (SEM), Starrett, Stereoscope, and Caltex Engineering Microscopes. I maintained cleanliness and organization in the lab by regularly cleaning workspaces, restocking supplies, rearranging Lista drawers, and managing recyclable disposals. I assessed equipment needs and placed purchase orders through vendors like Digi-Key, Uline, Lista Cabinets, and Creative Supply to ensure the lab remained well-equipped. Additionally, I assembled and wired multiple life test harnesses for both ambient and high-temperature testing environments. I also created and maintained detailed inventories of test components and hardware, supporting the lab’s efficiency and readiness for ongoing and future testing projects.',
      highlights: [
        "Laboratory Equipment Operation (SEM, Stereoscope, Starrett Microscopes)",
        "Technical Photography & Imaging",
        "Lab Organization & Maintenance",
        "Inventory Management",
        "Electrical Wiring (Life Test Harnesses)",
        "Procurement & Vendor Coordination (Digi-Key, Uline, etc.)",
        "Documentation & Data Management",
        "Attention to Detail",
        "Time Management",
        "Team Collaboration"
      ]
    }
  ];

  const TabButton = ({ period, isActive, onClick }) => (
    <Motion.button
      className={`period-tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
      // whileHover={{ scale: 1.03 }}
      // whileTap={{
      //   scale: 0.97,
      //   borderRadius: "0px 0px 0px 0px" // Bubble curve effect
      // }}
      // transition={{ 
      //   type: "spring",
      //   stiffness: 300,
      //   damping: 15
      // }}
    >
      {period}
      
      {/* Yellow indicator dot */}
      {isActive && (
        <Motion.div 
          className="bubble-indicator"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.1,
            type: "spring",
            stiffness: 500
          }}
        />
      )}
      
      {/* Bubble background */}
      <div className="bubble-curve" />
    </Motion.button>
  );

  return (
    <div className="experience-container">
      {/* Sidebar with bubble tabs */}
      <div className="sidebar">
        {experience.map((exp, index) => (
          <TabButton
            key={index}
            period={exp.period}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      
      {/* Content area */}
      <div className="content">
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{experience[activeTab].title}</h2>
            <h3>{experience[activeTab].company}</h3>
            
            <p>{experience[activeTab].description}</p>
            <h2>Skills:</h2>
            <ul className="highlights">
              {experience[activeTab].highlights.map((item, i) => (
                <Motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </Motion.li>
              ))}
            </ul>
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceWindow;