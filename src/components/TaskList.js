import React, { useContext } from "react";
import { TaskListContext } from "../context/index";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [{ tasks }, setState] = useContext(TaskListContext);
  const handleEditTask = (task) => {
    setState({ editable: task.id });
  };

  const handleDeleteTask = (task) => {
    tasks.filter((_) => _.id !== task.id);
    setState({ tasks });
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
