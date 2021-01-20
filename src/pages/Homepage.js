import HomepageText from '../components/HomepageText/HomepageText'

// PARTICLE BACKGROUNDS
import ParticlesBackground from "../components/ParticleBackground/BlackholeBackground.js"
// import PolygonImage from "../components/ParticleBackground/ParticleBackground.js"

import React, { Component }  from 'react';
import mountainImg from "../components/ParticleBackground/images/mountain_blur.png"
// import mountainWhite from "../components/ParticleBackground/images/mountain-white-dark.png"


import "../App.css"

class Homepage extends Component {
    render() {
        return (
            <>
                    
                    <div className="overlay-home">

                        <img className="mountain-center-overlay" src={mountainImg}></img>
                        <HomepageText/>               
                        <ParticlesBackground/>
                            
                    </div>

            </>
        );
    }
}

export default Homepage

