import React from 'react';
import GithubIcon from "../img/github.png";
import LinkedInIcon from "../img/linkedin.png";
import StackOverflowIcon from "../img/stackoverflow.png";
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/Lychnian" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/Lychnian" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <div className="created-by">  Created by Helen Colon  
        </div>
        <a href="https://stackoverflow.com/users/23573952/lychnian" target="_blank" rel="noopener noreferrer">
          <img src={StackOverflowIcon} alt="Stack Overflow" />
        </a>
      </div>
      
    </footer>
  );
}

export default Footer;
