import { useEffect, useRef } from "react";
import "./Todo.css";

const TodoItem = ({ todos, handleModiTodo, todoModi, todoDelete }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (todos.isEdit) {
      inputRef.current.focus();
    }
  }, [todos.isEdit]);

  return (
    <div className="todo-item">
      <div className="todo-item-contents">
        <input
          className="todo-text"
          value={todos.contents}
          disabled={!todos.isEdit}
          onChange={(e) => handleModiTodo(todos.id, e.target.value)}
          ref={inputRef}
        />
      </div>
      <div>{todos.tDate}</div>
      <button className="todo-btn todo-modi" onClick={() => todoModi(todos.id)}>
        수정
      </button>
      <button
        className="todo-btn todo-del"
        onClick={() => {
          todoDelete(todos.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
