import "./Todo.css";
import { useRef } from "react";

const TodoInput = (props) => {
  const { tmpInput, setTmpInput, handleAddTodo, inputRef } = props;

  const todo_input = (e) => {
    setTmpInput(e.target.value);
  };
  const keyPressEnter = (e) => {
    e.preventDefault();
    handleAddTodo();
  };
  return (
    <div className="example-line todo-input">
      <form onSubmit={keyPressEnter}>
        <input
          className="todo-input-left"
          placeholder="todo 입력하기.."
          onChange={todo_input}
          value={tmpInput}
          ref={inputRef}
        ></input>
        <button className="todo-input-right" type="submit">
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
