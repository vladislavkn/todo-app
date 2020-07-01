import React from "react";
import TaskList from "./TaskList";
import TaskListContextProvier from "../context";
import TaskForm from "./TaskForm";

const App = () => (
  <TaskListContextProvier>
    <TaskForm />
    <TaskList />
  </TaskListContextProvier>
);

export default App;
