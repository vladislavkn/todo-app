import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <span>{task.title}</span>
    <div>
      <button onClick={() => onDelete(task)} className="btn btn-light mr-1">
        <i className="fa fa-trash"></i>
      </button>
      <button onClick={() => onEdit(task)} className="btn btn-light">
        <i className="fa fa-edit"></i>
      </button>
    </div>
  </li>
);

export default TaskItem;
