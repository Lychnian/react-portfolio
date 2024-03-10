import React from "react";
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
