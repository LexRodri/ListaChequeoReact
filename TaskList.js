// TaskList.js
import React from 'react';

function TaskList({ tasks }) {
  return (
    <div>
      <h3>Lista de Chequeo</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.done} readOnly />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
