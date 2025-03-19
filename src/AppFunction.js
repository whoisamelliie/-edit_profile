import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import "./AppFunction.css";

function AppFunction() {
  const [newTask, setNewTask] = useState({ title: "", description: "", photo: "" });



  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title || !newTask.photo) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({title: "", description: "", photo: "" });
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <main> 
      <div className="wish-task"> 
        <div className="wish-star">
        <h1 className="tacks-t">Wish List</h1>
        <img 
          className="task-image" 
          src="star.JPG" 
          alt="Your photo" 
        />
        </div>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <ul className="task-list">
        {allTasks.map((task) => (
          <li key={task.id} className="task-item">
            <img src={task.photo} alt="Task" className="task-photo" />
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    
    </main>
  );
}
export default AppFunction;