import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

// Retrieve tasks from localStorage
const oldTasks = localStorage.getItem("tasks");

const App = () => {
  // Initialize state for tasks, either from localStorage or as an empty array
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  // Update localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle deleting a task
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  // Function to handle updating a task
  const handleUpdate = (taskIndex, updatedTask) => {
    const newTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, ...updatedTask } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="app">
      {/* Form to add new tasks */}
      <TaskForm setTasks={setTasks} />

      <main className="app_main">
        {/* Column for tasks with status "To do" */}
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks.filter(task => task.status === "todo")}
          status="todo"
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />

        {/* Column for tasks with status "Doing" */}
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks.filter(task => task.status === "doing")}
          status="doing"
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />

        {/* Column for tasks with status "Done" */}
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks.filter(task => task.status === "done")}
          status="done"
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </main>
    </div>
  );
};

export default App;
