import React from "react";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";

const styles = {
  icons: {
    borderRadius: '25%',
    filter: 'opacity(100%)',
    margin: '5px',
    height: '40px',
  },
  footerInfo: {
    background: 'black',
    color: 'white',
    fontSize: '14px',
    textAlign: 'center',
    padding: '1rem 0',
  },
};

function Footer() {
  return (
    <footer>
      <div className="container p-4">
        <div className="icons-section">
          <section className="mb-4">
            <a href="https://www.linkedin.com/in/HelenColon/" target="blank">
              <img style={styles.icons} src={LinkedIn} alt="linkedin icon" />
            </a>
            <a href="https://github.com/Lychnian" target="blank">
              <img style={styles.icons} src={Github} alt="github icon" />
            </a>
          </section>
        </div>
        <div className="info" style={styles.footerInfo}>
          Created by 🌼 Helen Colon
        </div>
      </div>
    </footer>
  );
}

export default Footer;
