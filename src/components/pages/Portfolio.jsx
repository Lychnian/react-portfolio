import React from "react";
import Portfolio1 from "../../img/garden.png";
import Portfolio2 from "../../img/weather.png";
import Portfolio3 from "../../img/employeetracker.png";
import Portfolio4 from "../../img/ecommerce.png";
import Portfolio5 from "../../img/timedquiz.png";
import Portfolio6 from "../../img/socialnetwork.png";

import "../../css/portfolio.css";

const styles = {
  h2: {
    textAlign: "center",
    color: "white",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
    color: "black",
  },
 };

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <h2 style={styles.h2}>Portfolio</h2>
      <span className="worksDesc" style={{ color: "white" }}>
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. 
        I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </span>
      <div className="container">
        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2 d-flex flex-column justify-content-center align-items-center position-relative">
            <a href="https://garden-planner19-05823e4485e2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={Portfolio1} alt="image of a beautiful garden" className="card-img-top img-fluid" />
            </a>
            <header className="position-absolute bottom-0 w-100 text-center">
              <h3 style={styles.header}>Garden Planner</h3>
            </header>
          </section>

          <section className="card col-sm-3 p-0 m-2 d-flex flex-column justify-content-center align-items-center position-relative">
            <a href="https://lychnian.github.io/wise-weather-dashboard/" target="_blank" rel="noopener noreferrer">
              <img src={Portfolio2} alt="" className="card-img-top img-fluid" />
            </a> 
            <header className="position-absolute bottom-0 w-100 text-center">
              <h3 style={styles.header}>Weather Dashboard</h3>
            </header>
          </section>

          <section className="card col-sm-3 p-0 m-2 d-flex flex-column justify-content-center align-items-center position-relative">
            <a href="https://github.com/Lychnian/janeaustentechco-employee-tracker" target="_blank" rel="noopener noreferrer">
              <img src={Portfolio3} alt="A man’s open hand holding a network of interconnected nodes, with human figurines, symbolizing the interconnectedness of employees in the company." className="card-img-top img-fluid" />
            </a>
            <header className="position-absolute bottom-0 w-100 text-center">
              <h3 style={styles.header}>Employee Tracker</h3>
            </header>
          </section>
        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2 d-flex flex-column justify-content-center align-items-center position-relative">
            <a href="https://github.com/Lychnian/server-side-commerce" target="_blank" rel="noopener noreferrer">
              <img src={Portfolio4} alt="A laptop with a little model of a shopping cart on it." className="card-img-top img-fluid" />
            </a> 
            <header className="position-absolute bottom-0 w-100 text-center">
              <h3 style={styles.header}>e-Commerce</h3>
            </header>
          </section>

          <section className="card col-sm-3 p-0 m-2 d-flex flex-column justify-content-center align-items-center position-relative">
            <a href="https://lychnian.github.io/js-timed-quiz/" target="_blank" rel="noopener noreferrer">
              <img src={Portfolio5} alt="" className="card-img-top img-fluid" />
            </a>
            <header className="position-absolute bottom-0 w-100 text-center">
              <h3 style={styles.header}>Timed Quiz</h3>
            </header>
          </section>

          <section className="card col-sm-3 p-0 m-2 d-flex flex-column justify-content-center align-items-center position-relative">
            <a href="https://github.com/Lychnian/travel-social-network" target="_blank" rel="noopener noreferrer">
              <img src={Portfolio6} alt="A group of employees around a conference table holding out to each other large cards of colorful icons. There are laptops and mobile devices on the table." className="card-img-top img-fluid" />
            </a>
            <header className="position-absolute bottom-0 w-100 text-center">
              <h3 style={styles.header}>Social Network</h3>
            </header>
          </section>
        </div>
      </div>
    </div>
  );
}
