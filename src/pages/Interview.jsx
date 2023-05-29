import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { MessagesList, SendMessage } from '../components';
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
                generateResponse();
            },
            error: (error) => console.warn(error),
        });

        return () => {
            subscription.unsubscribe();
          };
    }, [messages]);

    const generateResponse = async () => {
        console.log("called")
        const myInit = {
            body: {
              model: 'gpt-3.5-turbo',
              messages: [
                {
                  role: 'system',
                  content: 'You are a helpful assistant.'
                },
                {
                  role: 'user',
                  content: 'Who won the world series in 2020?'
                },
                {
                  role: 'assistant',
                  content: 'The Los Angeles Dodgers won the World Series in 2020.'
                },
                {
                  role: 'user',
                  content: 'Where was it played?'
                }
              ]
            } 
         };
        const result = await API.post("interviewAPI", "/chat", myInit);
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