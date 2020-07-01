import React from "react";
import TaskList from "./TaskList";
import TaskListContextProvier from "../context";
import TaskForm from "./TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <TaskListContextProvier>
    <div className="d-flex h-100 align-items-center justify-content-center">
      <div className="col-11 col-md-6 col-lg-4">
        <div className="d-flex h-100 align-items-center flex-column">
          <h1 className="text-center py-2 text-secondary">Todo Context app</h1>
          <div className="card w-100">
            <div className="card-header">
              <TaskForm />
            </div>
            <div className="card-body">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </TaskListContextProvier>
);

export default App;
