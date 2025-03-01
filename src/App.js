import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import Footer from "./components/footer/footer";
import About from "./components/about/About";
import Signup from "./components/signup/Signup";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signin from "./components/signup/Signin";
import Todo from "./components/todo/Todo";
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
  <div>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      </Router>
      <Footer />
  </div>
  );
};

export default App;