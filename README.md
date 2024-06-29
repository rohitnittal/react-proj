import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleSubmit} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
}

export default App;
