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
        <span className="intro-text"> I'm <span className="intro-name">Helen</span>, Full Stack Web Developer</span>
        <p className="paragraph">Welcome to my portfolio! I'm a Full Stack Web Developer with a focus on creating dynamic, 
        user-centric web applications. Leveraging skills honed through intensive bootcamp training, I excel in both 
        front-end and back-end development. Dive in to see how I turn ideas into impactful digital experiences.</p>
      </div>
    </div>
  );
}