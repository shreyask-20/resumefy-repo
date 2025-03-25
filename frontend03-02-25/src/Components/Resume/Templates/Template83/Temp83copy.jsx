import React from "react";
import "./Temp83.css"; // Use regular CSS for styling

const Temp83copy = () => {
  return (
    <div className="resumeContainer">
      <header className="resumeHeader">
        <h1>Shreyas Khandagale</h1>
        <h4>Software Developer</h4>
        <p>
          Passionate about building scalable and modern web applications using
          React, Node.js, and MongoDB.
        </p>
      </header>

      <div className="panel">
        {/* Left Panel */}
        <div className="leftPanel">
          <section>
            <h2>Contact</h2>
            <p>📍 Pune, India</p>
            <p>📧 shreyas@example.com</p>
            <p>📞 +91 9876543210</p>
          </section>

          <section>
            <h2>Skills</h2>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
            </ul>
          </section>
        </div> {/* ✅ Closing tag added */}

        {/* Right Panel */}
        <div className="rightPanel">
          <section>
            <h2>Work Experience</h2>
            <div>
              <h3>Software Engineer</h3>
              <p className="date">Jan 2022 - Present</p>
              <ul>
                <li>Built scalable web apps using React and MongoDB.</li>
                <li>Increased app performance by 35%.</li>
              </ul>
            </div>
          </section>
        </div> 
      </div> 
    </div>  
  );
};

export default Temp83copy;
