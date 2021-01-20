import React from "react";
import "./HomepageText.css";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar"

function HomepageText() {
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
          <Button variant="secondary" className="homeButton" href="/">
            About
          </Button>
          <Button variant="secondary" className="homeButton" href={"/portfolio"}>
            Portfolio
          </Button>
          <Button variant="secondary" className="homeButton" href="/">
            Contact
          </Button>
          
        </div>
      </div>
    </div>
    
  );
}

export default HomepageText;