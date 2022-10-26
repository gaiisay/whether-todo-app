import styled, { css } from "styled-components";

const TodoItem = styled.li`
  padding: 1em;
  margin-bottom: 0.5em;

  ${({ weather }) =>
    weather === "good" &&
    css`
      background-color: khaki;
    `}

  ${({ weather }) =>
    weather === "bad" &&
    css`
      background-color: slategray;
    `}

  ${({ weather }) =>
    weather === "always" &&
    css`
      background-color: skyblue;
    `}
`;

export { TodoItem };
