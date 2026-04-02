import "./Todo.css";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  setTodos,
  handleModiTodo,
  todoModi,
  todoDelete,
}) => {
  return (
    <div className="example-line todo-list">
      <h4>Todo List</h4>
      <input placeholder="검색어를 입력하세요." />
      <div className="list-item">
        {todos.map((todos) => {
          return (
            <TodoItem
              key={todos.id}
              todos={todos}
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
