import React from "react";
import "./TasksList.css";

function TasksList({ allTasks, handleDelete }) {
  return (
    <ul className="tasks-list">
      {allTasks.map(({ title, description, id }) => (
        <ol key={id} className="task-item">
          <div className="task-content">
            <h2>{title}</h2>
            {!description ? null : <p>{description}</p>}
          </div>
          <button
            className="delete-button"
            onClick={() => handleDelete(id)}> Delete Wish </button>
        </ol>
      ))}
    </ul>
  );
}

export default TasksList;
