import React from "react";
import "./Temp82.css";
import styles from "./Template82.module.css";

const Template82 = () => {
  return (
    <div className={styles.resumeContainer}>
      <header className={styles.resumeHeader}>
        <h1>Shreyas Khandagale</h1>
        <h4>Software Developer | Full-Stack Engineer</h4>
        <p>
          Passionate about building modern, scalable web applications with expertise in React, Node.js, and MongoDB.
        </p>
      </header>

      <div className={styles.panel}>
        {/* Sidebar */}
        <div className={styles.leftPanel}>
          <section>
            <h2>Contact</h2>
            <p>📍 Pune, India</p>
            <p>📧 shreyas@example.com</p>
            <p>📞 +91 9876543210</p>
            <p>
              <a href="https://github.com/shreyas" target="_blank" rel="noreferrer">GitHub</a> |
              <a href="https://linkedin.com/in/shreyas" target="_blank" rel="noreferrer"> LinkedIn</a>
            </p>
          </section>

          <section>
            <h2>Skills</h2>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>UI/UX Design</li>
            </ul>
          </section>

          <section>
            <h2>Certifications</h2>
            <ul>
              <li>Certified React Developer</li>
              <li>MongoDB Associate</li>
            </ul>
          </section>
        </div>

        {/* Main Content */}
        <div className={styles.rightPanel}>
          <section>
            <h2>Work Experience</h2>
            <div>
              <h3>Software Developer</h3>
              <p className={styles.date}>Jan 2022 - Present</p>
              <ul>
                <li>Developed full-stack web applications using React, Node.js, and MongoDB.</li>
                <li>Improved application performance by 30% through code optimization.</li>
                <li>Implemented REST APIs and integrated third-party services like Twilio.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Projects</h2>
            <div>
              <h3>Video Streaming App</h3>
              <ul>
                <li>Built using React, Node.js, MongoDB, and Stream API.</li>
                <li>Implemented video upload, edit, and delete functionalities.</li>
              </ul>
            </div>

            <div>
              <h3>E-commerce Website</h3>
              <ul>
                <li>Developed a Flipkart-like website with cart, checkout, and authentication features.</li>
                <li>Used Express.js for backend and MongoDB for data management.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p className={styles.date}>2018 - 2022</p>
              <p>University of Pune</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template82;
