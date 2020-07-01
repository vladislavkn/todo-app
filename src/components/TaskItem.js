import React from "react";

const TaskItem = ({ title }) => {
  return (
    <li>
      <span>{title}</span>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </li>
  );
};

export default TaskItem;
