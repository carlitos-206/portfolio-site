import React from 'react';
import "./index.css";
const Project = ({ project }) => {
    return (
    <button className="project-button">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>{project.language} - {project.framework}</p>
        <p>Database: {project.database || 'N/A'}</p>
    </button>
    );
};

const ProjectsGrid = ({ projects }) => {
    return (
    <div className="projects-grid">
        {projects.map(project => (
        <Project key={project.id} project={project} />
        ))}
    </div>
    );
};

export default ProjectsGrid;