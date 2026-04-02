import "./Todo.css";
import "../utils/date.js";

const TodoHeader = () => {
  const tday = new Date();
  return (
    <div className="example-line todo-header">
      <h2>TodoList</h2>
      <h3>
        {tday.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h3>
    </div>
  );
};

export default TodoHeader;
