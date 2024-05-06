import React from 'react';

import { Tilt } from 'react-tilt';

import "./index.css";

const Options = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          100,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Project = ({ project }) => {
    return (
    <Tilt className="project-button" options={Options}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>{project.language} - {project.framework}</p>
        <p>Database: {project.database || 'N/A'}</p>
    </Tilt>
    );
}

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