import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-card">
      <h3>📋 To-Do</h3>
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.done ? "task done" : "task"}
            onClick={() => toggleDone(index)}
          >
            <span>{task.text}</span>
            <button onClick={(e) => {
              e.stopPropagation(); // prevent triggering toggleDone
              deleteTask(index);
            }}>X
            
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
