import React from "react";
import "./index.css";
import RocketShip from "../../global/components/rocketShip";
import { projects_list } from "../../global/data/projects";
import ProjectsGrid from "../../global/components/projects";
const ProjectsPage = () => {
    return (
        <div className="projects">
            <RocketShip />
            <ProjectsGrid projects={projects_list} />
        </div>
    );
}

export default ProjectsPage;