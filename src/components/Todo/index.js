import Button from "../Button";
import Svg from "../Svg";
import { TodoItem } from "./Todo.styled";

function Todo({ children, weather, onChange, todoId, isChecked, deleteTodo }) {
  return (
    <TodoItem weather={weather}>
      <div>
        <input
          type="checkbox"
          onChange={() => {
            onChange(todoId);
          }}
          checked={isChecked ? true : false}
        />
        {children}
      </div>
      <Button type="button" variant="icon" onClick={() => deleteTodo(todoId)}>
        <Svg variant="delete"></Svg>
      </Button>
    </TodoItem>
  );
}

export default Todo;
