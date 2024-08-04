import axios from 'axios';
import API_BASE_URL from './config';
import TaskComments from './TaskComments';
import React, { useState, useEffect } from 'react';

function TaskList({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/project/${projectId}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [projectId]);

  return (
    <div>
      <h2>任务列表</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <TaskComments taskId={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
