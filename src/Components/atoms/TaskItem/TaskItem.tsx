import React, { useState } from "react";
import "./TaskItem.scss";
import { ReactComponent as Save } from "../../../Assets/Icons/save.svg";
import { ReactComponent as Edit } from "../../../Assets/Icons/edit.svg";
import { ReactComponent as Delete } from "../../../Assets/Icons/delete.svg";
import { ReactComponent as Complete } from "../../../Assets/Icons/checkbox-checked.svg";
import { ReactComponent as Incomplete } from "../../../Assets/Icons/checkbox-unchecked.svg";

interface Task {
  /*
  id of the task- set to timestamp for individuality
  */
  id: string;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onEdit: (newText: string) => void;
  onComplete: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onEdit,
  onComplete,
  onDelete,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (editedText.trim() !== "") {
      onEdit(editedText);
      setEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {!editing ? (
        <>
          <button className="complete-button" onClick={onComplete}>
            {task.completed ? <Complete /> : <Incomplete />}
          </button>
          <div onClick={onComplete} className="task-text">
            <strong>{task.text}</strong>
          </div>
          <div className="task-actions">
            <button className="edit-button" onClick={() => setEditing(true)}>
              <Edit />
            </button>
            <button className="delete-button" onClick={onDelete}>
              <Delete />
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="delete-button" onClick={handleEdit}>
            <Save />
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
