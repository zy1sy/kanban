import React, { useState } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import CreateProject from './CreateProject';
import AddTask from './AddTask';
import TaskList from './TaskList';
import KanbanBoard from './KanbanBoard'; // 引入 KanbanBoard 组件


function App() {
  const [projectId, setProjectId] = useState('1'); // 假设项目ID为1

  return (
    <div className="App">
      <h1>敏捷看板</h1>
      <Register />
      <Login />
      <CreateProject />
      <AddTask />
      <TaskList projectId={projectId} />
      <KanbanBoard projectId={projectId} /> {/* 使用 KanbanBoard 组件 */}
    </div>
  );
}

export default App;
