import React from "react";
import Project from "./Project";

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <br/>
                <hr/>
                <br/>
                <h2>Project Showcase</h2>
                <Project />
                <Project />
                <Project />
            </div>
        )
    }
}

export default Projects;