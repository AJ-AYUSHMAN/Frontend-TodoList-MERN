import React from "react";
import "./home.css";

const Home = () => {
    return ( <div className="home d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center">Organise your<br /> work and life,Here.
        </h1>
        <p>Todo App helps you get things done, <br /> from work assignments to gift shopping.</p>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary">Get Started</button>
        </div>
        </div>
    </div>
    );
};

export default Home;