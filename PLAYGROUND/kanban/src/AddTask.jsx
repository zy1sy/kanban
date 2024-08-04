import axios from 'axios';
import API_BASE_URL from './config';
import React, { useState } from 'react';

function AddTask({ projectId }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/task/create`, {
        name: taskName,
        projectId
      });
      if (response.data.success) {
        alert('Task added successfully!');
      } else {
        alert('Failed to add task!');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h2>添加任务</h2>
      <input
        type="text"
        placeholder="任务名称"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>添加任务</button>
    </div>
  );
}

export default AddTask;
