import React, { useState, useEffect, useRef } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { MessagesList, SendMessage } from '../components';
import axios from 'axios';
import awsmobile from '../aws-exports';
import { Auth } from 'aws-amplify';
import { createMessage } from '../services/messageService';

const Interview = () => {
    const [messages, setMessages] = useState([{sender: "user", message: "great"}]);
    const [isTyping, setIsTyping] = useState(false);
    const [interviewId, setInterviewId] = useState("a2ceea1a-c63a-43b9-a040-1528247e9403")
    const systemMessage = { 
        "role": "system", "content": `You are a job interviewer. You will interview candidates for the role they provide and ask then questions \
            on their past experiences.
        """`
      };
    useEffect(() => {
        fetchMessages();
      }, []);

    useEffect(() => {
        const filter = {
            messageInterviewId: {eq: interviewId}
        }
        // Subscribe to creation of message
        const subscription = API.graphql(
            // subscribe to outgoing messages
            graphqlOperation(onCreateMessage, {filter})
            ).subscribe({
            next: ({ value }) => {
                setMessages((messages) => {
                    const newMessage = value.data.onCreateMessage;
                    const updatedMessages = [...messages, newMessage];
    
                    // Check the sender and conditionally call generateResponse with updated messages array
                    if (newMessage.sender !== "ChatGPT") {
                        generateResponse(updatedMessages);
                    }
    
                    setIsTyping(false);
                    // Return updated messages array for state update
                    return updatedMessages;
                });
    
            },
            error: (error) => console.warn(error),
        });

        return () => {
            subscription.unsubscribe();
          };
    }, [messages]);

    const generateResponse = async (chatMessages) => {
        let apiMessages = [];
        setIsTyping(true);
        if (chatMessages != null) {
          apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
              role = "assistant";
            } else {
              role = messageObject.sender;
            }
            return { role: role, content: messageObject.message}
          });
        }

        const payload = {
            "model": 'gpt-3.5-turbo',
            "messages": [
                systemMessage,  // The system message DEFINES the logic of our chatGPT
                ...apiMessages // The messages from our chat with ChatGPT
              ]
        };

        try {
            const response = await axios.post('https://8v9hz3gal8.execute-api.eu-west-1.amazonaws.com/interviewGPT', payload, {
            headers: {
                'Content-Type': 'application/json',
            }
            });
        
            const messageData = {
                sender: "ChatGPT",
                message: response.data,
                messageInterviewId: interviewId,
                direction: "incoming"
            };
              
            await createMessage(messageData);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchMessages = async () => {
        const filter = {
            messageInterviewId: {eq: interviewId},
        }
        try {
            const result = await API.graphql(
                graphqlOperation(listMessages, {
                    filter, sortDirection: 'DESC'
                })
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
                sender={"user"}
                direction={"outgoing"}
            />
        </div>
    );
}

export default Interview