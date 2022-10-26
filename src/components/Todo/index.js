import { TodoItem } from "./Todo.styled";

function Todo({ children, weather, onChange, todoId, isChecked }) {
  return (
    <TodoItem weather={weather}>
      <input
        type="checkbox"
        onChange={() => {
          onChange(todoId);
        }}
        checked={isChecked ? true : false}
      />{" "}
      {children}
    </TodoItem>
  );
}

export default Todo;
