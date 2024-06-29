import React, { useState } from 'react';

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ text: newTodo, completed: false });
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter a new todo item"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
