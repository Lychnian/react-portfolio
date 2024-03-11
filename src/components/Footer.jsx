import React from 'react';
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import '../css/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={Github} alt="Github" />
        <div className="created-by">  Created by Helen Colon  </div>
        <img src={LinkedIn} alt="LinkedIn" />
      </div>
    </footer>
  );
}


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
        <a href="https://stackoverflow.com/users/23573952/lychnian" target="_blank" rel="noopener noreferrer">
          <img src={StackOverflowIcon} alt="Stack Overflow" />
        </a>
      </div>
      <div className="created-by">Created by Helen Colon</div>
    </footer>
  );
}

export default Footer;
