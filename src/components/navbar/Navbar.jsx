import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/"><b>Todo App</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" to="/todo">Todo</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active btn-nav" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active btn-nav" to="/signin">SignIn</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active btn-nav" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
