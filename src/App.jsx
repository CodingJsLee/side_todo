import "./App.css";
import { formatDate } from "./utils/date.js";
import { useRef, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
const mokupData = [
  {
    id: 1,
    contents: "hello",
    tDate: formatDate(),
    isEdit: false,
  },
  {
    id: 2,
    contents: "밥먹기",
    tDate: formatDate(),
    isEdit: false,
  },
  {
    id: 3,
    contents: "똥싸기",
    tDate: formatDate(),
    isEdit: false,
  },
];
function App() {
  const [tmpInput, setTmpInput] = useState("");
  const [todos, setTodos] = useState(mokupData);
  const inputRef = useRef(null);

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
    if (!confirm("삭제하시겠습니까?")) {
      return;
    }

    setTodos(
      todos.filter((todo) => {
        return todo.id != idx;
      })
    );
  };

  const handleAddTodo = () => {
    if (!tmpInput.trim()) {
      inputRef.current.focus();
      return;
    }

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
          inputRef={inputRef}
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
