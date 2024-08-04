import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from './config';

function KanbanBoard({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/project/${projectId}/tasks`);
        if (response.data) {
          setTasks(response.data);
        } else {
          alert('Failed to fetch tasks.');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
        alert('Failed to fetch tasks.');
      }
    };

    fetchTasks();
  }, [projectId]);

  const getStatusTasks = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="kanban-board">
      <h2>项目任务看板</h2>
      <div className="kanban-column">
        <h3>还没做</h3>
        <ul>
          {getStatusTasks('todo').map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div className="kanban-column">
        <h3>正在做</h3>
        <ul>
          {getStatusTasks('in-progress').map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div className="kanban-column">
        <h3>完成了</h3>
        <ul>
          {getStatusTasks('done').map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KanbanBoard;
