// TodoCards.js
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({ title, body, id, delid, display, updateTodo }) => {
    return (
        <div className="p-3 todo-card">
            <div>
                <h5>{title}</h5>
                <p className="todo-card-p">
                    {body.split("", 33)}....
                </p>
            </div>
            <div className="d-flex justify-content-around ">
                <div className="d-flex justify-content-center align-items-center card-icon-head px-1 py-2"
                onClick={() => {
                    updateTodo("block");
                }}
                >
                    <GrDocumentUpdate className="card-icons" /> Update
                </div>

                <div className="d-flex justify-content-center align-items-center card-icon-head px-1 py-2 text-danger" 
                onClick={() => {delid(id);}}
                >
                    <AiFillDelete className="card-icons del"/> Delete
                </div>
            </div>
        </div>

    );
};

export default TodoCards;
