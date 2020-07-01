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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
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
