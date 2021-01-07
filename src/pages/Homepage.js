import HomepageText from '../components/HomepageText/HomepageText'
import ParticlesBackground from "../components/ParticleBackground/ParticleBackground"

// import Particles from "react-tsparticles";
import React, { Component }  from 'react';
// import HomepageText from '../components/HomepageText/HomepageText'

class Homepage extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <HomepageText/>
                    <ParticlesBackground />
                </div>
            </div>
            </>
        );
    }
}

export default Homepage

