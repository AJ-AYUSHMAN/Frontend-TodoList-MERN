import React, { useState } from "react";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const res = await axios.post(`${window.location.origin}/api/v1/login`, inputs);
            console.log(res.data.others?._id); // Log user ID if available
            alert(res.data.message);
            setInputs({ email: "", password: "" });
            history("/dashboard"); // Redirect to dashboard or another page on success
        } catch (error) {
            console.error("Signin Error:", error.response?.data || error.message);
            setError(error.response?.data?.error || "Something went wrong. Try again.");
        }
    };

    return (
        <div className="signin d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column - Signin Form */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="mb-4">Signin</h2>
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
                            type="password" 
                            name="password" 
                            placeholder="Enter your Password" 
                            onChange={change} 
                            value={inputs.password} 
                            required 
                        />
                        <button className="btn btn-primary mt-2" onClick={submit}>Sign In</button>
                    </div>
                    {/* Right Column - Signin Heading */}
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <h1 className="text-center sign-up-heading">Sign<br />In</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
