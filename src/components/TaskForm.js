import React, { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <button type="submit">Add</button>
        <button>Delete all</button>
      </div>
    </form>
  );
};

export default TaskForm;
