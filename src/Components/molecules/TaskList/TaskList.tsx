import React from "react";
import TaskItem from "../../atoms/TaskItem/TaskItem";
import "./TaskList.scss";

interface Task {
  /*
   id of the task - this is set to timestamp
   */
  id: string;
  /*
   title of the task
   */
  text: string;
  /*
   boolean whether task is completed
   */
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (taskId: string, newText: string) => void;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskList = ({ tasks, onEdit, onComplete, onDelete }: TaskListProps) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={(newText) => onEdit(task.id, newText)}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
