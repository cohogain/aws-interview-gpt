import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { createMessage } from '../graphql/mutations';
import { onCreateMessage } from '../graphql/subscriptions';
import { MessagesList, SendMessage } from '../components';

const Interview = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([{sender: "user", message: "great"}]);
    const [isTyping, setIsTyping] = useState(false);
    const [interviewId, setInterviewId] = useState("a2ceea1a-c63a-43b9-a040-1528247e9403")

    useEffect(() => {
        fetchMessages();
    }, []);
    

    useEffect(() => {
        // Subscribe to creation of message
        const subscription = API.graphql(
          graphqlOperation(onCreateMessage)
        ).subscribe({
          next: ({ provider, value }) => {
            setMessages((messages) => [
              ...messages,
              value.data.onCreateMessage,
            ]);
          },
          error: (error) => console.warn(error),
        });
      }, []);

    const fetchMessages = async () => {
        try {
            const result = await API.graphql(
                graphqlOperation(listMessages)
            );
            console.log(result)
            setMessages(result.data.listMessages.items);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    return (
        <div>
            <MessagesList
                messages={messages}
            />
            <SendMessage 
                interviewId={interviewId}
            />
        </div>
    );
}

export default Interview