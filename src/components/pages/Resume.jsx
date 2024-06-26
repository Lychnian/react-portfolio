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
      <p>As a Junior Full Stack Web Developer, I possess a versatile skill set that enables me to develop dynamic and engaging web applications.
         On the front-end, I am proficient in HTML, CSS, and JavaScript, allowing me to craft visually appealing and responsive user interfaces. 
         I also have experience with popular libraries and frameworks such as jQuery and React, enabling me to create interactive and intuitive 
         user experiences. In backend development, I am skilled in database management systems like MySQL and MongoDB, as well as frameworks like
         Express.js and Node.js. This expertise in server-side development and API integration enables me to create robust and scalable web applications
         that effectively meet the needs of users and businesses alike. 
      </p>
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