import React from "react";
import Portfolio1 from "../../img/garden.png";
import Portfolio2 from "../../img/weather.png";
import Portfolio3 from "../../img/employeetracker.png";
import Portfolio4 from "../../img/ecommerce.png";
import Portfolio5 from "../../img/timedquiz.png";
import Portfolio6 from "../../img/socialnetwork.png";
import "../../css/portfolio.css"; // Import the CSS file for styles

export default function Portfolio() {
  return (
    <div className="portfolio-background">
      <div className="container">
        <div className="row justify-content-center">
          {/* Project 1 */}
          <div className="col-sm-6">
            <section className="portfolio-card">
              <a href="https://garden-planner19-05823e4485e2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio1} alt="Garden Planner" className="card-img-top" />
                <header>Garden Planner</header>
              </a>
            </section>
          </div>
          {/* Project 2 */}
          <div className="col-sm-6">
            <section className="portfolio-card">
              <a href="https://lychnian.github.io/wise-weather-dashboard/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio2} alt="Weather Dashboard" className="card-img-top" />
                <header>Weather Dashboard</header>
              </a>
            </section>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* Project 3 */}
          <div className="col-sm-6">
            <section className="portfolio-card">
              <a href="https://github.com/Lychnian/janeaustentechco-employee-tracker" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio3} alt="Employee Tracker" className="card-img-top" />
                <header>Employee Tracker</header>
              </a>
            </section>
          </div>
          {/* Project 4 */}
          <div className="col-sm-6">
            <section className="portfolio-card">
              <a href="https://github.com/Lychnian/server-side-commerce" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio4} alt="e-Commerce Site" className="card-img-top" />
                <header>e-Commerce</header>
              </a>
            </section>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* Project 5 */}
          <div className="col-sm-6">
            <section className="portfolio-card">
              <a href="https://lychnian.github.io/js-timed-quiz/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio5} alt="Timed Quiz" className="card-img-top" />
                <header>Timed Quiz</header>
              </a>
            </section>
          </div>
          {/* Project 6 */}
          <div className="col-sm-6">
            <section className="portfolio-card">
              <a href="https://github.com/Lychnian/travel-social-network" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio6} alt="Social Network for Travelers" className="card-img-top" />
                <header>Social Network</header>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
