import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";

const Todo = () => {
    const [inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([]);

    const show = () => {
        document.getElementById("textarea").style.display = "block";
    };

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const submit = () => {
        if (inputs.title === "" || inputs.body === "") {
            toast.error("Tilte and body should not be empty");
        }
        else {
            setArray([...Array, inputs])
            console.log(inputs);
            setInputs({ title: "", body: "" })
            toast.success("Your task is added");
            toast.error("Your task is not added ! please signin");
        }
    };

    const del = (id) => {
        console.log(id);
        const newArr = Array.filter((item, index) => index !== id);
        setArray(newArr);
    };

    const updateTodo = (value) => {
        console.log(value);
        document.getElementById("todo-update").style.display = value;
    };

    return (
        <>
            <div className="todo">
                <ToastContainer />
                <div className="todo-main d-flex justify-content-center align-items-center my-4 flex-column">
                    <div className="d-flex flex-column todo-inputs-div w-50 p-2">
                        <input
                            type="text"
                            placeholder="TITLE"
                            className="my-2 p-2 todo-inputs"
                            onClick={show}
                            name="title"
                            value={inputs.title}
                            onChange={change} />
                        <textarea
                            id="textarea"
                            type="text"
                            placeholder="BODY"
                            name="body"
                            value={inputs.body}
                            className="p-2 todo-inputs"
                            onChange={change} // Added onChange event
                            style={{ display: "none" }} // Ensure it starts hidden
                        />
                    </div>
                    <div className="w-50 d-flex justify-content-end my-3">
                        <button className="btn btn-primary px-2 py-1" onClick={submit}>
                            Add Todo
                        </button>
                    </div>
                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row">

                            {Array && Array.map((item, index) => (
                                <div className="col-lg-3 col-10 mx-5 my-2 " key={index}>
                                    <TodoCards title={item.title} body={item.body} id={index} delid={del} display={updateTodo}/>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
            <div className="todo-update " id = "todo-update">
                <div className="container update">
                    <Update display={updateTodo} />
                </div>

            </div>
        </>
    );
};

export default Todo;
