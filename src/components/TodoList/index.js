import Todo from "../Todo";
import { TodoList as List } from "./TodoList.styled.js";

export default function TodoList({ todos, onChange, title }) {
  return (
    <>
      <h2>
        {title} ({todos.length})
      </h2>
      <List>
        {todos.map((todo) => {
          return (
            <Todo
              isChecked={todo.isChecked}
              onChange={onChange}
              todoId={todo.id}
              key={todo.id}
              weather={todo.weather}
            >
              {todo.title}
            </Todo>
          );
        })}
      </List>
    </>
  );
}
