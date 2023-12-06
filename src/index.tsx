import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TaskManager from "./TaskManager";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  //strict mode is removed to ensure that the tasks persist on page reload
  <TaskManager />,
);

reportWebVitals();
