// src/components/TodoItem.js
import React from "react";

const TodoItem = ({ todo, deleteTodo }) => (
  <li>
    {todo.text}
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </li>
);

export default TodoItem;
