// src/TaskItem.tsx
import React, { useState } from 'react';
import './TaskItem.scss';

interface Task {
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

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onComplete, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(editedText);
      setEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {!editing ? (
        <>
          <div onClick={onComplete} className="task-text">
            <strong>{task.text}</strong>
          </div>
          <div className="task-actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
            <button className="complete-button" onClick={onComplete}>
              Mark as {!task.completed ? 'Complete' : 'incomplete'}
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
          <button onClick={handleEdit}>Save</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
