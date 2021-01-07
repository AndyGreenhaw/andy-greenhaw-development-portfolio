import React from "react";
import "./HomepageText.css";
import { Button } from "react-bootstrap";

function HomepageText() {
  return (
    <div className="splash-container">
      <div className="row">
        <div className="homeHead col-12">Hi, I'm Andy.</div>
      </div>
      <div className="row">
        <div className="homeSubhead col-12">I'm a full-stack developer with an extensive background in data visualization and strategic communication.</div>
      </div>
      <div className="row">
        <div className="homeButton">
          <Button variant="secondary" className="textEdit4 col-2" href="/">
            View My Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomepageText;