import Particles from "react-tsparticles";
import React, { Component }  from 'react';
import polygonImage from "./images/smalldeer.svg"
import pathseg from "pathseg"

// if (process.browser) {
//     require("pathseg");
//   }
 
class Homepage extends Component {
    render() {
        return (
        <>
        {/* <HomepageText /> */}
        <Particles
            className="semiTransparent"
            id="tsparticles"
            options={{
            autoplay: true,
            ////////////////
            // BACKGROUND //
            ////////////////

            background: {
                color: "rgb(0,0,0,0.5)",
                opacity: 1
            },

            backgroundMask: {
                composite: "destination-out",
                cover: {
                    color: "#fff",
                    opacity: 1,       
                },
                enable: false
            },

            backgroundMode: {
                enable: false,
                zIndex: -1,
                
            },

            detectRetina: false,
            fpsLimit: 30,

            ///////////////
            // INFECTION //
            ///////////////

            infection: {
                cure: false,
                delay: 0,
                enable: false,
                infections: 0,
                stages: []
            },

            ///////////////////
            // INTERACTIVITY //
            ///////////////////

            interactivity: {
                detectsOn: "canvas",

                events: {
                    onClick: {
                        enable: false,
                        mode: "push"
                    },
                    // onDiv: {
                    //     selectors: "#repulse-div",
                    //     enable: false,
                    //     mode: "repulse",
                    //     type: "circle"
                    // },
                    onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: false,
                            force: 2,
                            smooth: 10
                        }
                    },
                    resize: true,
                },

                modes: {
                    attract: {
                        distance: 200,
                        duration: 0.4,
                        speed: 1
                    },
                    bounce: {
                        distance: 200
                    },
                    bubble: {
                        distance: 40,
                        duration: 2,
                        opacity: 8,
                        size: 6,
                    },
                    connect: {
                        distance: 80,
                        links: {opacity:0.5},
                        radius: 60
                    },
                    grab: {
                        distance: 400,
                        links: {
                            blink: false,
                            consent: false,
                            opacity: 1
                        }
                    },
                    light: {
                        area: {
                            gradient: {
                                start: {value: "#ffffff"},
                                stop: {value: "#000000"},
                            },
                            radius: 1000,
                        },
                        shadow: {
                            color: {value: "#000000"},
                            length: 2000
                        },                            
                    },
                    push: {
                        quantity: 4,
                    },
                    remove: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                        speed: 1
                    },
                    slow: {
                        factor: 1,
                        radius: 0
                    },
                    trail: {
                        delay: 1,
                        quanity: 1
                    }
                },
            },

            ////////////
            // MOTION //
            ////////////

            manualParticles: [],

            ////////////
            // MOTION //
            ////////////

            motion: {
                disable: false,
                reduce: {
                    factor: 4,
                    value: false
                }
            },

            ///////////////
            // PARTICLES //
            ///////////////

            particles: {

                // PARTICLE COLOR
                color: {
                    value: "#ffffff",
                    animation: {
                        enable: false,
                        speed: 1,
                        sync: true
                    },
                },
                
                // PARTICLE BOUNCE
                bounce: {
                    horizontal: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1 
                    },
                    vertical: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    },
                    
                },
                
                // PARTICLE COLLISIONS
                collisions: {
                    bounce: {
                        horizontal: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        },
                        vertical: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        },
                    },
                    enable: false,
                    mode: "bounce",
                },
                
                // PARTICLE LIFE
                life: {
                    count: 0,
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        sync: false
                    },
                    duration: {
                        random: {
                            enable: false,
                            minimumValue: 0.0001
                        },
                        value: 0,
                        sync: false
                    }
                },
                
                // PARTICLE LINKS (LINES)
                lineLinked: {
                    blink: false,
                    color: "#ffffff",
                    consent: false,
                    distance: 30,
                    enable: true,
                    frequency: 1,
                    opacity: 0.4,
                    shadow: {
                        blur: 5,
                        color: "#00ff00",
                        enable: false
                    },
                    triangle: {
                        enable: false,
                        frequency: 1
                    },
                    width: 1,
                    warp: false
                },

                // PARTICLE MOVEMENT
                move: {
                    angle: {
                        offset: 45,
                        value: 90
                    },
                    attract: {
                        enable: false,
                        rotate: {
                            x: 600,
                            y: 1200
                        }
                    },
                    direction: "none",
                    distance: 0,
                    enable: true,
                    gravity: {
                        acceleration: 9.81,
                        enable: false,
                        maxSpeed: 50
                    },
                    noise: {
                        delay: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0
                        },
                        enable: false
                    },
                    outModes: {
                        default: "bounce",
                        bottom: "bounce",
                        left: "bounce",
                        right: "bounce",
                        top: "bounce"
                    },
                    random: false,
                    size: false,
                    speed: 1,
                    straight: false,
                    trail: {
                        enable: false,
                        length: 10,
                        fillColor: "#000000"
                    },
                    vibrate: false,
                    warp: false
                },

                // NUMBER OF PARTICLES
                number: {
                    density: {
                        enable: false,
                        value_area: 2000,
                        factor: 1000
                    },
                    limit: 0,
                    value: 200
                },

                // PARTICLE OPACITY
                opacity: {
                    random: {
                        enable: false,
                        minimumValue: 0.1
                    },
                    value: 0.4,
                    animation: {
                        enable: true,
                        minimumValue: 0.05,
                        speed: 2,
                        sync: false
                    },     
                },

                reduceDuplicates: false,

                // PARTICLE RORATE
                rotate: {               
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: 0,
                    direction: "clockwise",
                    animation: {
                        enable: false,
                        speed: 0,
                        sync: false
                    },
                    path: false
                },

                // PARTICLE SHADOW
                shadow: {
                    blur: 0,
                    color: "#000000",
                    enable: false,
                    offset: {
                        x: 0,
                        y: 0
                    }
                },

                // PARTICLE SHAPE
                shape: {
                    options: {
                        character: {
                            fill: false,
                            font: "Verdana",
                            weight: "400"
                        },
                        char: {
                            fill: false,
                            font: "Verdana",
                            weight: "400"
                        },
                        polygon: {
                            sides: 5,
                        },
                        star: {
                            sides:5
                        },
                        // image: {
                        //     height: 100,
                        //     replaceColor: true,
                        //     src: "https://cdn.matteobruni.it/images/particles/github.svg",
                        //     width: 100
                        // },
                    },
                    type: "circle"
                },

                // PARTICLE SIZE
                size: {
                    random: {
                        enable: true,
                        minimumValue: 1
                    },
                    value: 1,
                    animation: {
                        destroy: "none",
                        enable: false,
                        minimumValue: 0.1,
                        speed: 40,
                        startValue: "max",
                        sync: false
                    }
                },

                // PARTICLE STROKE
                stroke: {
                    width: 0,
                    color: {
                        value: "#000000",
                        animation: {
                            enable: false,
                            speed: 1,
                            sync: true
                        }
                    }
                },

                // PARTICLE TWINKLE
                twinkle: {
                    lines: {
                        enable: false,
                        frequency: 0.05,
                        opacity: 1
                    },
                    particles: {
                        enable: false,
                        frequency: 0.05,
                        opacity: 1
                    }
                },
            },

            // PAUSE STUFF
            pauseOnBlur: true,
            pauseOnOutsideViewPort: false,

            // THEMES
            themes: [],

            polygon: {
                enable: true,
                draw: {
                    enable: true,
                    lineColor: "rgba(255,255,255,0.2)",
                    lineWidth: 0.5,
                    // stroke: {
                    //     color: "rgba(255,255,255,0.2)",
                    //     width: 0.5,
                    //     opacity: 0.2
                    // }
                },
                inlineArrangement: "equidistant",
                move: {
                    radius: 10,
                },
                scale: 0.5,
                type: "inline",
                // url: require("./images/sphereWireframe.svg")
                url: polygonImage
            }
        }}
        />
        </>
        );
    }
}

export default Homepage

