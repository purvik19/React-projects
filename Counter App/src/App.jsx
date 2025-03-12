import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

const decrement = () =>{
  if(count > 0){
    setCount(count - 1)
  }
}
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-4 items-center bg-gray-200 p-4 rounded-lg shadow-lg">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <h1 className="bg-orange-500 text-white px-6 py-2 rounded text-lg">
          Counter: {count}
        </h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
