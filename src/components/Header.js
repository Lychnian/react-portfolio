import React from "react";
import '../css/header.css';

const styles = {
  navbar: {
    backgroundColor: "black", // Set background color to black
    color: "white", // Set text color to white
  },
  navbarA: {
    color: "#0000FF",
    fontSize: "19px",
  },
  h1: {
    fontSize: "50px",
    paddingLeft: "1rem",
    color: "#FFFF00", // Set name color to yellow
    fontSize: "36px", // Increase font size for name
  },
  padding: {
    padding: "8px",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navbar}>
      <header className="nav justify-content-center" style={styles.flexContainer}>
        <h1 style={styles.h1}>Helen Colon</h1>
        <ul style={styles.navbarA} className="nav justify-content-center">
          <li style={styles.padding} className="nav-item">
            <a
              href="#"
              onClick={() => handlePageChange("About")}
              className={currentPage === "About" ? "nav-link-active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li style={styles.padding} className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li style={styles.padding} className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link-active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li style={styles.padding} className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link-active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default Header;
