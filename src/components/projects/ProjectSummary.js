import React from 'react';

const ProjectSummary=({project})=>{
    return(
        <div className="card">
        <div className="card-content grey-text text-darken-2">
            <span className="card-title">{project.title}</span>
            <p>Posted by {project.firstname} {project.lastname} </p>
            <p className="grey-text">21st October, 1997</p>
        </div>
        </div>
    )
}
export default ProjectSummary 