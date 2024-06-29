import React from 'react';

function TodoItem(props) {
  return (
    <li>
      <span style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>
        {props.text}
      </span>
    </li>
  );
}

export default TodoItem;
