import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { MessagesList, SendMessage } from '../components';
import axios from 'axios';
import awsmobile from '../aws-exports';
import { Auth } from 'aws-amplify';


const Interview = () => {
    const [messages, setMessages] = useState([{sender: "user", message: "great"}]);
    const [isTyping, setIsTyping] = useState(false);
    const [interviewId, setInterviewId] = useState("a2ceea1a-c63a-43b9-a040-1528247e9403")

    useEffect(() => {
        fetchMessages();
      }, []);

    useEffect(() => {
        const filter = {
            messageInterviewId: {eq: interviewId},
        }
        // Subscribe to creation of message
        const subscription = API.graphql(
            // subscribe to outgoing messages
            graphqlOperation(onCreateMessage, {filter})
            ).subscribe({
            next: ({ value }) => {
                setMessages((messages) => [
                ...messages,
                value.data.onCreateMessage,
                ]);
            },
            error: (error) => console.warn(error),
        });

        return () => {
            subscription.unsubscribe();
          };
    }, [messages]);

    const generateResponse = async () => {
        console.log("called")
        const result = await axios.post(
            awsmobile.aws_interviewgpt_lambda,
            { "model": "gpt-3.5-turbo", "messages": messages }
        );
        console.log(result)
    };

    const fetchMessages = async () => {
        const filter = {
            messageInterviewId: {eq: interviewId},
        }
        try {
            const result = await API.graphql(
                graphqlOperation(listMessages, {
                    filter,
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
            />
        </div>
    );
}

export default Interview