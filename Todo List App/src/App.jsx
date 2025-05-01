import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [Todo, setTodo] = useState(() => JSON.parse(localStorage.getItem("Todo")) || []);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(Todo));
  }, [Todo]);

  const add = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const update = [...Todo];
      update[editIndex] = input; 
      setTodo(update);
      setEditIndex(null);
    } else {
      setTodo([...Todo, { text: input, completed: false }]);
    }
    setInput("");
  };

  const handleUpdate = (index) => {
    setInput(Todo[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
      let deletetodos = [...Todo];
        deletetodos.splice(index,1)
        setTodo(deletetodos)
  }
  const handleCom = (index) => {
    let Comtodos = [...Todo];
    Comtodos[index].completed = !Comtodos[index].completed;
      setTodo(Comtodos)
}

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter Todos..."
          className="p-2 w-96 border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={add}
          className="bg-blue-500 p-2 text-white ml-2"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* ✅ Display Todo List */}
      <div className="mt-4">
        {Todo.map((item, index) => (
          <div key={index} className="flex justify-between w-96 m-2 bg-amber-200 p-3">
            <ul>
              <li
               className={`flex-1 ${item.completed ? "line-through text-gray-500" : ""}`}
              >{item.text}</li>
            </ul>
            <div>
              <button
              onClick={() => handleCom(index)}
                className="bg-green-500 text-white px-2 py-1 rounded mx-1 hover:bg-green-700"
              >
                ✓
              </button>
              <button
              onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                ✕
              </button>
              <button
                onClick={() => handleUpdate(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-700 ml-2"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
