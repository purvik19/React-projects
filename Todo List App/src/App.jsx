import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const add = () => {
    if (input === "") return;
    const updatedTasks = [...tasks, { text: input, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
    setInput("");
  };
 
  const deletetask = (index) =>{
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const complatetask = (index) =>{
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-64"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={add}
        >
          Add
        </button>
      </div>

      <ul className="w-80">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
          >
            <span 
            className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
            >{task.text}</span>
            <button
              onClick={() => complatetask(index)}
              className="bg-green-500 text-white px-2 py-1 rounded mx-1 hover:bg-green-700"
            >
              ✓
            </button>
            <button
              onClick={() => deletetask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              ✕
            </button>
          </li>

        ))}
      </ul>
    </div>
  );
}

export default App;
