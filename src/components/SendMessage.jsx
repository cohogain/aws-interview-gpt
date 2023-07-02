import React, { useState } from 'react';
import { createMessage } from '../services/messageService';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

const SendMessage = ({ interviewId, sender, direction }) => {
  const [content, setContent] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (content.trim() === '') {
      return;
    }

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
    <form className="flex items-center" onSubmit={handleSend}>
      <input
        name="body"
        placeholder="Type a message..."
        value={content}
        onChange={e => setContent(e.target.value)}
        autoComplete="off"
        className="flex-grow h-10 border border-gray-300 rounded-l-md p-2 mt-2"
      />
      <button type="submit" className="p-2 h-10 mt-2 bg-blue-500 text-white rounded-r-md border border-blue-500">
        <FaPaperPlane />
      </button>
      <button type="button" className="p-2 h-10 mt-2 bg-blue-500 text-white ml-2 rounded-md border border-blue-500">
        <FaMicrophone />
      </button>
    </form>
  );
};

export default SendMessage;