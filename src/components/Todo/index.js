import { TodoItem } from "./Todo.styled";

function Todo({ children, weather }) {
  return <TodoItem weather={weather}>{children}</TodoItem>;
}

export default Todo;
