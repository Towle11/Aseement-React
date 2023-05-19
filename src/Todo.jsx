import React, { useState } from 'react';
import './Todo.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button className='add-btn' onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className='delete-btn' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
