import React, { useContext } from "react";
import { TaskListContext } from "../context/index";

const TaskList = () => {
  const tasks = useContext(TaskListContext);
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default TaskList;
