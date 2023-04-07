import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const TodoApp = () => {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the search text
  const [search, setSearch] = useState("");
  // State for the filtered list of todos based on search text
  const [filteredTodos, setFilteredTodos] = useState([]);
  // State for the new todo text
  const [newTodo, setNewTodo] = useState("");

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || []; // If there are no todos in local storage, use an empty array
    setTodos(storedTodos); // Set the todos state to the todos from local storage
  }, []); // Only run this effect once when the component mounts

  // Update the filtered list of todos when the todos or search text changes
  useEffect(() => {
    const updateFilteredTodos = () => {
      const lowercasedSearch = search.toLowerCase();
      setFilteredTodos(
        todos.filter((todo) =>
          todo.text.toLowerCase().includes(lowercasedSearch)
        )
      );
    };
    updateFilteredTodos();
  }, [todos, search]);

  // Save todos to local storage when the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo to the list
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: uuidv4(), text: newTodo }]); // Add a new todo to the todos state
      setNewTodo("");
    }
  };

  // Function to delete a todo by its ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Remove the todo from the todos state
  };

  return (
    <div className="todo-app">
      {/* Input field for search text */}
      <div className="btns">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        {/* Input field for new todo text */}
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        {/* Button to add a new todo */}
        <button onClick={addTodo}>Add</button>
      </div>
      {/* List of filtered todos */}
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {/* Button to delete a todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
