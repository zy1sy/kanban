import axios from 'axios';
import API_BASE_URL from './config';
import React, { useState } from 'react';

function CreateProject() {
  const [name, setName] = useState('');

  const handleCreateProject = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/project/create`, {
        name
      });
      if (response.data.success) {
        alert('Project created successfully!');
      } else {
        alert('Failed to create project!');
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div>
      <h2>创建项目</h2>
      <input
        type="text"
        placeholder="项目名称"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreateProject}>创建项目</button>
    </div>
  );
}

export default CreateProject;
