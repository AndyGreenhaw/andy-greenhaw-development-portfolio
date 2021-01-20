import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import reactDom, { createPortal } from "react-dom";
// import PorfolioBackground from "../components/ParticleBackground/PortfolioBackground"

import "./PortfolioContent.css"

import ProjectCard from '../../components/ProjectCard/ProjectCard'

import codingProjects from '../../json/codingALL.json'
import animationProjects from '../../json/animationALL.json'
import videoProjects from '../../json/videoALL.json'
import writingProjects from '../../json/writingProjects.json'

// import PortfolioBackground from '../components/ParticleBackground/PortfolioBackground'

const Portfolio = () => {
    
    const [ codingProjectsArr, setCodingProjectArr] = useState([])
    const [ animationProjectsArr, setAnimationProjectsArr] = useState([])
    const [ videoProjectsArr, setVideoProjectsArr] = useState([])
    const [ writingProjectsArr, setWritingProjectsArr] = useState([])

    useEffect(() => {
        loadContent();
        // Modal.setAppElement(document.getElementById("#modalDisplay"));
    })

    function loadContent() { 
        setCodingProjectArr(codingProjects)
        setAnimationProjectsArr(animationProjects)
        setVideoProjectsArr(videoProjects)
        setWritingProjectsArr(writingProjects)
    }

    console.log(codingProjectsArr)
    return (
        <>
        <div>
            
            {/* FULL-STACK DEVELOPMENT */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Full-Stack Web Development</h3>
                </div>
            </div>

            <div className="row projectContainter">                
                {codingProjectsArr.map(project => (
                    <ProjectCard key={project._id} {...project}/>
                ))}
            </div>

            {/* ANIMATION */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Data Visualization</h3>
                </div>
            </div>

            <div className="row projectContainter">
                {animationProjectsArr.map(project => (
                    <ProjectCard key={project._id} {...project}/>
                ))}
            </div>

            {/* VIDEO EDITING */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Strategic Communication</h3>
                </div>
            </div>

            <div className="row projectContainter">
                {videoProjectsArr.map(project => (
                    <ProjectCard key={project._id} {...project}/>
                ))}
            </div>
            
            {/* WRITING  */}

            <div className="row">
                <div className="col">
                    <h3 className="categoryHeadline">Writing</h3>
                </div>
            </div>

            <div className="row projectContainter">
                {writingProjectsArr.map(project=> (
                    <ProjectCard key={project._id} {...project}>
                    </ProjectCard>
                ))}
            </div>

        </div>
        
        </>
        
    );
}

export default Portfolio;