import React from "react";

const TaskItem = ({ title }) => {
  return (
    <li>
      <span>{title}</span>
      <div>
        <button>
          <i className="fa fa-trash"></i>
        </button>
        <button>
          <i className="fa fa-edit"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
