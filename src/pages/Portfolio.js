import React, { Component } from "react";

import "../App.css"

import PortfolioBackground from '../components/ParticleBackground/BlackholeBackground'
import PortfolioContent from '../components/PortfolioContent/PortfolioContent'

class Portfolio extends Component {
    render() {
    
    return (
        <>
        {/* <div className="container-fluid"> */}
            <div className="overlay-portfolio">
                <PortfolioContent/>
            </div>
            <div className="homeBackground">
                <PortfolioBackground />
            </div>
        {/* </div> */}
        </>
        
    );
    }
}

export default Portfolio;