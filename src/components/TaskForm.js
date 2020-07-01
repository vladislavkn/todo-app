import React, { useContext, useState, useEffect, useRef } from "react";
import { TaskListContext } from "../context";

const TaskForm = () => {
  const [{ editable, tasks }, setState] = useContext(TaskListContext);
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (editable !== false) {
      setTitle(tasks.find((_) => _.id === editable).title || "");
    }
    inputRef.current.focus();
  }, [editable]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editable !== false) {
      setState((prevState) => ({
        editable: false,
        tasks: prevState.tasks.map((task) =>
          task.id === editable ? { ...task, title } : task
        ),
      }));
    } else if (title.length) {
      setState((prevState) => ({
        ...prevState,
        idCounter: prevState.idCounter + 1,
        tasks: [...prevState.tasks, { title, id: prevState.idCounter + 1 }],
      }));
    }
    setTitle("");
  };

  const handleDeleteTasks = () => {
    setState((prevState) => ({ ...prevState, tasks: [] }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        ref={inputRef}
        value={title}
        placeholder="Task title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="py-2">
        <button className="btn btn-dark mr-2" type="submit">
          {editable !== false ? "Apply" : "Add"}
        </button>
        <button className="btn btn-dark" onClick={handleDeleteTasks}>
          Delete all
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
