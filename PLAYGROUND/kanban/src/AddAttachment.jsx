import React, { useState } from 'react';

function AddAttachment({ taskId }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddAttachment = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`/api/tasks/${taskId}/attachments`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Attachment added successfully!');
      setFile(null); // 清空输入框
    } else {
      alert('Failed to add attachment.');
    }
  };

  return (
    <div>
      <h3>Add Attachment</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleAddAttachment}>Add Attachment</button>
    </div>
  );
}

export default AddAttachment;
