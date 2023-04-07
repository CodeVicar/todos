import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";
import AddTodo from "./components/AddTodo";

const TodoApp = () => {
  // State variables for todos, search text, filtered todos, and new todo text
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Update the filtered todos based on the search text
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

  // Function to add a new todo to the todos state
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: uuidv4(), text: newTodo }]);
      setNewTodo("");
    }
  };

  // Function to delete a todo from the todos state
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Render the UI components
  return (
    <div className="todo-app">
      {/* SearchBar component for searching todos */}
      <SearchBar search={search} setSearch={setSearch} />
      <br />
      {/* AddTodo component for adding new todos */}
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      {/* TodoList component for displaying filtered todos */}
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
