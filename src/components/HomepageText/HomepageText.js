import React from "react";
import "./HomepageText.css";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar"

function HomepageText() {

  const location = useLocation();

  return (
   
    <div className="center">
      <div className="row">
        <div className="homeHead col-12">Andy Greenhaw</div>
      </div>
      <div className="row">
        <div className="homeSubhead col-12">Full-Stack Developer with Extensive Background in Data Visualization and Strategic Communication.</div>
      </div>
      <div className="row">
        <div className="homeButtonDisplay">
          <Link to="/" variant="secondary" id="homeButton" href="/">
            About
          </Link>
          <Link to="/portfolio" variant="secondary" className={location.pathname === "/portfolio"} id="homeButton" href={"/portfolio"}>
            Portfolio
          </Link>
          <Link to="/" variant="secondary" id="homeButton" href="/">
            Contact
          </Link>
          
        </div>
      </div>
    </div>
    
  );
}

export default HomepageText;