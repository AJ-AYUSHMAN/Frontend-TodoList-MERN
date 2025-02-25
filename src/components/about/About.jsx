import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex"><h1>About</h1></div>
                <p>This is a Todo App project for my winter pep of MERN at LPU</p>
            </div>
        </div>
    );
};

export default About;