import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="App">
      <h2>All Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id} style={{ 
          border: "1px solid #ccc", 
          padding: "10px", 
          marginBottom: "10px",
          borderRadius: "8px"
        }}>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Title:</strong> {todo.title}</p>
          <p><strong>Status:</strong> {todo.completed ? "✅ Completed" : "❌ Not Completed"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
