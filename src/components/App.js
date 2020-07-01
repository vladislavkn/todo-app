import React from "react";
import TaskList from "./TaskList";
import TaskListContextProvier from "../context";

const App = () => (
  <TaskListContextProvier>
    <TaskList />
  </TaskListContextProvier>
);

export default App;
