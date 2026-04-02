import "./Todo.css";

const TodoInput = (props) => {
  const { tmpInput, setTmpInput, handleAddTodo } = props;

  const todo_input = (e) => {
    setTmpInput(e.target.value);
  };

  return (
    <div className="example-line todo-input">
      <input
        className="todo-input-left"
        placeholder="todo 입력하기.."
        onChange={todo_input}
        value={tmpInput}
      ></input>
      <button className="todo-input-right" onClick={handleAddTodo}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
