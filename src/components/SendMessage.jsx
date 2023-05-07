// Components/SendMessage.js
import React, { useState } from 'react'
import { createMessage } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

const SendMessage = ({ interviewId }) => {
  const [content, setContent] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const input = {
      sender: "interviewee",
      message: content,
      messageInterviewId: interviewId,
      direction: "outgoing"
    }
    
    try {
      const result = await API.graphql(
        graphqlOperation(createMessage, { input })
      );
      console.log(result)
      setContent('');
    } catch (error) {
      console.error('Error creating message:', error);
    }
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
  )
};

export default SendMessage;