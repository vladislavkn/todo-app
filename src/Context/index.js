import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const [state, setState] = useState([{ title: "task title", id: 0 }]);

  return (
    <TaskListContext.Provider value={state}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
