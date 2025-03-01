import React, { useState } from "react";
import "./Signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({ email: "", username: "", password: "" });
    const [error, setError] = useState("");

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const res = await axios.post("https://backend-todo-list-mern.vercel.app/api/v1/signup", inputs);
            alert(res.data.message);
            setInputs({ email: "", username: "", password: "" });
            history("/todo");
        } catch (error) {
            console.error("Signup Error:", error.response?.data || error.message);
            setError(error.response?.data?.error || "Something went wrong. Try again.");
        }
    };

    return (
        <div className="signup d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column - Signup Form */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="mb-4">Signup</h2>
                        {error && <p className="text-danger">{error}</p>} {/* Display error message */}
                        <input 
                            className="form-control mb-3 p-2" 
                            type="email" 
                            name="email" 
                            placeholder="Enter your Email" 
                            onChange={change} 
                            value={inputs.email} 
                            required 
                        />
                        <input 
                            className="form-control mb-3 p-2" 
                            type="text" 
                            name="username" 
                            placeholder="Enter your Name" 
                            onChange={change} 
                            value={inputs.username} 
                            required 
                        />
                        <input 
                            className="form-control mb-3 p-2" 
                            type="password" 
                            name="password" 
                            placeholder="Enter your Password" 
                            onChange={change} 
                            value={inputs.password} 
                            required 
                        />
                        <button className="btn btn-primary mt-2" onClick={submit}>Sign Up</button>
                    </div>
                    {/* Right Column - SignUp Heading */}
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <HeadingComp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
