import React, { useState } from 'react';
import { Predictions } from 'aws-amplify';
import { FaPaperPlane } from 'react-icons/fa';
import { createMessage } from '../services/messageService';
import AudioRecorder from './AudioRecorder';

const SendMessage = ({ interviewId, sender, direction }) => {
  const [content, setContent] = useState('');

    /** Convert recorded audio to text using Amazon Transcribe   */
    const convertFromBuffer = (bytes) => {
        
      Predictions.convert({
        transcription: {
          source: {
            bytes,
          },
          language: "en-US",
        },
      })
        .then(({ transcription: { fullText } }) => {
          handleSend(null, fullText);
        })
        .catch((err) => console.log(JSON.stringify(err, null, 2)));
    };

  const handleSend = async (e, content) => {
    if(e) {
      e.preventDefault();
      e.stopPropagation();
    }

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
      <AudioRecorder finishRecording={convertFromBuffer} />
    </form>
  );
};

export default SendMessage;
