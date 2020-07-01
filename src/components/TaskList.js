import React, { useContext } from "react";
import { TaskListContext } from "../context/index";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [{ tasks }, setState] = useContext(TaskListContext);
  const handleEditTask = (task) => {
    setState((prevState) => ({ ...prevState, editable: task.id }));
  };

  const handleDeleteTask = (task) =>
    setState((prevState) => ({
      ...prevState,
      tasks: tasks.filter((_) => _.id !== task.id),
    }));

  return (
    <div>
      <ul className="list-group">
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
