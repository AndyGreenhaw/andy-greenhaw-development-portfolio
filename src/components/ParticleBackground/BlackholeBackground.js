import Particles from "react-tsparticles";
import React, { Component }  from 'react';
import "pathseg"
// import polyImage from "./images/smalldeer.svg"

class BlackholeBackground extends Component {
    render() {
        return (
            <>
            <Particles 
            options={{    
                fpsLimit: 60,
                background: {
                    color: "rgb(17,36,53)",
                    opacity: 1
                },
                particles: {
                number: {
                    value: 2000,
                    density: {
                    enable: true,
                    area: 800
                    }
                },
                color: {
                    value: ["#ffffff"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 0.1,
                    random: {
                    enable: true,
                    minimumValue: 1
                    }
                },
                move: {
                    size: true,
                    enable: true,
                    speed: 0.1,
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                    default: "out"
                    },
                    attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                    },
                    trail: {
                    enable: true,
                    length: 5,
                    fillColor: "rgb(17,36,53)"
                    },
                    warp: true
                }
                },
                interactivity: {
                detectsOn: "canvas",
                events: {
                    onclick: {
                    enable: true,
                    mode: "push"
                    },
                    resize: true
                },
                modes: {
                    push: {
                    quantity: 4
                    }
                }
                },
                detectRetina: true,
                absorbers: {
                orbits: true,
                destroy: true,
                opacity: 1,
                color: "#112435",
                size: {
                    value: 5,
                    limit: 10,
                    random: false,
                    density: 50
                },
                position: {
                    x: 50,
                    y: 50
                }
                }
                
            }}
            />
            </>
        );
    }
}
        
export default BlackholeBackground