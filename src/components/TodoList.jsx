import "./Todo.css";
import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";
import { formatDate } from "../utils/date.js";

const TodoList = ({
  todos,
  setTodos,
  handleModiTodo,
  todoModi,
  todoDelete,
}) => {
  const [search, setSearch] = useState("");

  const searchData = (e) => {
    setSearch(e.target.value);
  };
  const onChangeSearch = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.contents.includes(search);
    });
  };
  const rstArr = onChangeSearch();

  return (
    <div className="example-line todo-list">
      <h4>Todo List</h4>
      <input
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={searchData}
      />
      <div className="list-item">
        {rstArr.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todos={todo}
              setTodos={setTodos}
              handleModiTodo={handleModiTodo}
              todoModi={todoModi}
              todoDelete={todoDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
