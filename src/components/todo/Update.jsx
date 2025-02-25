import React from "react";

const Update = ( {display}) => {
    return (
        <div className="p-5 bg-light d-flex justify-content-center align-items-center flex-column update">
            <h3>Update your task</h3>
            <input type="text" className="form-control my-4 w-100 p-3" placeholder="Title" />
            <textarea className="todo-inputs my-3 w-100 p-3" placeholder="Body"></textarea>
            <div>
            <button className="btn btn-primary my-4">Update</button>
            <button className="btn bg-danger my-4" onClick={()=>display("none")}>Close</button>
            </div>
        </div>
    );
};

export default Update;
