import Todo from "../Todo";
import { TodoList as List } from "./TodoList.styled.js";

export default function TodoList({ todos }) {
  return (
    <>
      <h2>Open ToDos ({todos.length})</h2>
      <List>
        {todos.map((todo) => {
          return (
            <Todo key={todo.id} weather={todo.weather}>
              {todo.title}
            </Todo>
          );
        })}
      </List>
    </>
  );
}
