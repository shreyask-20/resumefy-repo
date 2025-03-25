import React from "react";
import styles from "./Temp83.module.css";   // Import CSS module

const Temp83 = () => {
  return (
    <div className={styles.resumeContainer}>
      <header className={styles.resumeHeader}>
        <h1>Shreyas Khandagale</h1>
        <h4>Full-Stack Developer | Software Engineer</h4>
        <p>
          Passionate developer with expertise in building scalable web applications using React, Node.js, and MongoDB.
        </p>
      </header>

      <div className={styles.panel}>
        {/* Left Panel */}
        <div className={styles.leftPanel}>
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
              <li>GraphQL</li>
            </ul>
          </section>

          <section>
            <h2>Languages</h2>
            <ul>
              <li>English (Fluent)</li>
              <li>Marathi (Fluent)</li>
              <li>Hindi (Fluent)</li>
            </ul>
          </section>
        </div>

        {/* Right Panel */}
        <div className={styles.rightPanel}>
          <section>
            <h2>Work Experience</h2>
            <div>
              <h3>Software Engineer</h3>
              <p className={styles.date}>Jan 2022 - Present</p>
              <ul>
                <li>Built full-stack applications with React, Node.js, and MongoDB.</li>
                <li>Enhanced website performance by 40% through optimization.</li>
                <li>Collaborated with cross-functional teams to deliver client requirements.</li>
              </ul>
            </div>

            <div>
              <h3>Frontend Developer Intern</h3>
              <p className={styles.date}>Jun 2020 - Dec 2021</p>
              <ul>
                <li>Implemented UI components using HTML, CSS, and React.js.</li>
                <li>Improved application responsiveness by 25%.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div>
              <h3>Bachelor of Technology in Computer Science</h3>
              <p className={styles.date}>2018 - 2022</p>
              <p>Pune University</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Temp83;
