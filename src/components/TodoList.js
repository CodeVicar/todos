// src/components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
    ))}
  </ul>
);

export default TodoList;
