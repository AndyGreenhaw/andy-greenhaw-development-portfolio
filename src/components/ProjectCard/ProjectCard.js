import React from "react";
import "./ProjectCard.css"

function ProjectCard(props) {

    return(
        <>
            <div className="col-md-4" >
                <div className="projectContainter" >
                    <div className="projectCards" >
                        <div className="row portfolioHead">
                            {props.name}
                        </div>
                        <div className="row projectImage">
                            <a href={props.link} target="blank"><img  src={props.thumb} width="100%" alt={props.alt}/></a>
                        </div>

                        <div className="row portfolioCopy">
                            {props.description}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
//{props.thumb}
export default ProjectCard;