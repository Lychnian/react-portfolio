import React from "react";
import ResumeHelenColon from "../../pdf/Resume.pdf";
import "../../css/resume.css"; // Import CSS file for styling

export default function Resume() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <p>
        <a className="resume-link" href={ResumeHelenColon} download>
          DOWNLOAD FULL RESUME
        </a>
      </p>
      <p>
      As a Full Stack Web Developer, I possess a diverse set of technical skills that allow me to create dynamic and engaging web applications. 
      On the front-end, I am proficient in HTML, CSS, and JavaScript, enabling me to design visually appealing and responsive user interfaces. 
      Additionally, I have experience with popular libraries and frameworks such as JQuery and React, allowing me to build interactive 
      and intuitive user experiences. On the back-end, I am skilled in database management systems like MySQL and MongoDB, 
      as well as frameworks like Express.js and Node.js. With expertise in server-side development and API integration, 
      I can create robust and scalable web applications that meet the needs of both users and businesses.</p>
      <p>
      Below is a summary of my technical skills:
      </p>
      <h3>Technical Skills</h3>
      <div className="skills-container">
        <div className="front-end">
          <h4>Front-End</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>React</li>
          </ul>
        </div>
        <div className="back-end">
          <h4>Back-End</h4>
          <ul>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Node</li>
            <li>APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}