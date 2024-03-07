import React from "react";
import '../css/header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <header className="nav justify-content-center flexContainer">
        <h1>Helen Colon</h1>
        <ul className="nav justify-content-center navbarA">
          <li className="nav-item padding">
            <a
              href="#"
              onClick={() => handlePageChange("About")}
              className={currentPage === "About" ? "nav-link-active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="nav-item padding">
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
          <li className="nav-item padding">
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
          <li className="nav-item padding">
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
