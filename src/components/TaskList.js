import React, { useContext } from "react";
import { TaskListContext } from "../context/index";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [{ tasks }] = useContext(TaskListContext);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
