import React, { useContext, useState } from "react";
import { TaskListContext } from "../context";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [{ editable }, setState] = useContext(TaskListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editable !== false) {
      setState((prevState) => ({
        editable: false,
        tasks: prevState.tasks.map((task) => {
          task.id === editable ? { ...task, title } : task;
        }),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        idCounter: prevState.idCounter + 1,
        tasks: [...prevState.tasks, { title, id: prevState.idCounter }],
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <button type="submit">{editable !== false ? "Apply" : "Add"}</button>
        <button>Delete all</button>
      </div>
    </form>
  );
};

export default TaskForm;
