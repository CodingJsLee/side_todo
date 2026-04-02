import { useEffect, useState } from "react";
import "./App.css";
import { formatDate } from "./utils/date.js";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tmpInput, setTmpInput] = useState("");
  const [todos, setTodos] = useState([]);

  const todoModi = (idx) => {
    setTodos(
      todos.map((obj) => {
        return obj.id === idx
          ? { ...obj, isEdit: !obj.isEdit, tDate: formatDate() }
          : obj;
      })
    );
  };

  const todoDelete = (idx) => {
    console.log(idx);
  };

  const handleAddTodo = () => {
    if (!tmpInput.trim()) return;

    const newTodo = {
      id: todos.length + 1,
      contents: tmpInput,
      tDate: formatDate(),
      isEdit: false,
    };

    setTodos([...todos, newTodo]);
    setTmpInput("");
  };

  const handleModiTodo = (idx, content) => {
    setTodos(
      todos.map((obj) => {
        return obj.id === idx ? { ...obj, contents: content } : obj;
      })
    );
  };

  return (
    <div>
      <div className="app-wrapper">
        <TodoHeader />
        <TodoInput
          setTmpInput={setTmpInput}
          tmpInput={tmpInput}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          handleModiTodo={handleModiTodo}
          todoModi={todoModi}
          todoDelete={todoDelete}
        />
      </div>
    </div>
  );
}

export default App;
