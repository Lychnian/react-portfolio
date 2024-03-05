import React from 'react';
import HelenColon from "../../img/HelenColon.png";

const styles = {
  HelenColon: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '25%',
    border: '3px solid #58C2C7',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h1: {
    textAlign: 'center',
    color: 'yellow',
    fontSize: '40px',
  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    backgroundColor: 'black',
    color: 'white',
  },
  hello: {
    color: 'white',
    fontSize: '24px',
  },
  introText: {
    color: 'white',
    fontSize: '24px',
  },
  introName: {
    color: 'yellow',
    fontSize: '24px',
  },
  jobTitle: {
    fontSize: '20px',
  },
  paragraph: {
    fontSize: '18px',
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h1 style={styles.h1}>About Me</h1>
      <div>
        <img style={styles.HelenColon} src={HelenColon} alt="HelenColon" />
      </div>
      <span style={styles.hello}>Hello,</span>
      <span style={styles.introText}>I'm <span style={styles.introName}>Helen</span> <br />Full Stack <br/>Web
      <span style={styles.jobTitle}>Developer</span></span>
      <p style={styles.paragraph}>Welcome to my portfolio! I'm a Full Stack Web <br/>Developer with a focus on creating dynamic,<br/> 
      user-centric web applications. Leveraging skills<br/>honed through intensive bootcamp training,<br/>I excel in both 
      front-end and back-end<br/> development. Dive in to see how I turn ideas<br/>into impactful digital experiences.</p>
    </div>
  );
}
