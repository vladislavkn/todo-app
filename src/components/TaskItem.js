import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => (
  <li>
    <span>{task.title}</span>
    <div>
      <button onClick={() => onEdit(task)}>
        <i className="fa fa-trash"></i>
      </button>
      <button onClick={() => onDelete(task)}>
        <i className="fa fa-edit"></i>
      </button>
    </div>
  </li>
);

export default TaskItem;
