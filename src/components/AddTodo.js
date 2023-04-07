import React from "react";

// AddTodo component for handling new todo input and add button
const AddTodo = ({ newTodo, setNewTodo, addTodo }) => (
  <>
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
  </>
);

export default AddTodo;
