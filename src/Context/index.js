import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const state = useState({
    tasks: [{ title: "task title", id: 0 }],
    editable: false,
    idCounter: 1,
  });

  return (
    <TaskListContext.Provider value={state}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
