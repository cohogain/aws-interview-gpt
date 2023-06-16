import React, { useState } from 'react';
import { createMessage } from '../services/messageService';

const SendMessage = ({ interviewId, sender, direction }) => {
  const [content, setContent] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const messageData = {
      sender: sender,
      message: content,
      messageInterviewId: interviewId,
      direction: direction
    };
    
    await createMessage(messageData);
    setContent('');
  };

  return (
    <form onSubmit={handleSend}>
      <input
        name="body"
        placeholder="body"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="message-input"
      />
    </form>
  );
};

export default SendMessage;