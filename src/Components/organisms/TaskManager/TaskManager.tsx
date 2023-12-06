import React, { useState, useEffect } from "react";
import TaskList from "../../molecules/TaskList/TaskList";
import "./TaskManager.scss";
import { ReactComponent as Commit } from "../../../../src/Assets/Icons/commit.svg";

interface Task {
  /**
  Id of the task - this is being set to timestamp
  **/
  id: string;
  /**
  Title of the task
  **/
  text: string;
  /**
  Boolean to state whether task has been completed
  **/
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [openTitle, setOpenTitle] = useState(false);

  useEffect(() => {
    // Load tasks from local storage on component mount
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error loading tasks from local storage:", error);
      // Handle the error or provide user feedback
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks change
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to local storage:", error);
      // Handle the error or provide user feedback
    }
  }, [tasks]);

  const addTask = () => {
    // Adds task if anything has been typed
    if (newTaskText.trim() === "") return;
    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText("");
    setButtonActive(false);
  };

  const openInput = () => {
    //toggles the title editor
    setOpenTitle((prevCheck) => !prevCheck);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // this allows adding a task with enter
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default behavior of the Enter key in a textarea (inserting a newline)
      addTask();
    }
  };

  const editTask = (taskId: string, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task,
      ),
    );
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setNewTaskText(inputText);
    setButtonActive(inputText.trim() !== ''); // Update buttonActive based on trimmed input text
  };
  
  const completeTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="page">
      <div className="taskManager">
        <h1>Get Sh*t Done</h1>
        <div className="taskManager-input">
        <button
            className={`button-add  ${openTitle ? "open" : ""}`}
            aria-label="Open Title"
            onClick={openInput}
          >
            <Commit /> {!openTitle ? <div>Add Task</div> : ""}
          </button>
          {openTitle && (
            <>
              <input
                type="text"
                placeholder="Type a new task here..."
                value={newTaskText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button
                className={`button-add ${buttonActive ? "active" : ""}`}
                aria-label="Add Task"
                onClick={addTask}
              >
                <Commit />
              </button>
            </>
          )}
          
        </div>
        <TaskList
          tasks={tasks}
          onEdit={editTask}
          onComplete={completeTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default TaskManager;
