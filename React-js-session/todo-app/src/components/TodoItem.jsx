import React from "react";

function TodoItem({ todo }) {
  return (
    <li className="flex items-center gap-2 border-b">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        disabled={todo.isCompleted}
      />
      {todo.name}
    </li>
  );
}

export default TodoItem;
