import React from 'react';
import HelenColon from "../../img/HelenColon.png";
import '../../css/about.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="hero-container">
        <img src={HelenColon} alt="HelenColon" className="hero-image" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <span className="hello">Hello,</span>
        <span className="intro-text"> I'm <span className="intro-name">Helen</span>, Junior Full Stack Web Developer</span>
        <p className="paragraph">"Welcome to my portfolio! I'm a Junior Full Stack Web Developer specializing in crafting dynamic and 
        user-centric web applications. With a foundation built on rigorous bootcamp training, I possess expertise in both front-end and 
        back-end development. Explore my projects to witness how I transform concepts into impactful digital experiences."
        </p>
      </div>
    </div>
  );
}