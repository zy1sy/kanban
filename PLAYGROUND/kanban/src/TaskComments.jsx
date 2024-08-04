import axios from 'axios';
import API_BASE_URL from './config';
import React, { useState } from 'react';

function TaskComments({ taskId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/task/${taskId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [taskId]);

  const handleAddComment = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/task/${taskId}/comment`, {
        text: newComment
      });
      if (response.data.success) {
        setComments([...comments, response.data.comment]);
        setNewComment('');
      } else {
        alert('Failed to add comment!');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <h3>评论</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="添加评论"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>添加评论</button>
    </div>
  );
}

export default TaskComments;
