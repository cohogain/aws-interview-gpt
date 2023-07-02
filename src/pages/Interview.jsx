import React, { useState, useEffect, useRef } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { messagesByDate } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { MessagesList, SendMessage } from '../components';
import axios from 'axios';
import { createMessage as createMessageMutation } from '../graphql/mutations';
import { useStateContext } from '../context/ContextProvider';
import { useLocation } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';

const Interview = () => {
    const location = useLocation();
    const interviewId = location.state.interviewId;
    const job_title = location.state.job_title;
    const experience_level = location.state.experience_level;
    const interviewType = location.state.interviewType;
    const job_description = location.state.job_description;
    const [messages, setMessages] = useState([]);
    const systemMessage = { 
            "role": "system", "content": `You are a job interviewer. You will interview candidates for the role they provide and ask then questions \
                on their past experiences.`};
    const userMessage = [{ "sender": "user", "message": `I am here for a ${interviewType} interview for a ${experience_level} ${job_title}. The full job description is: ${job_description}. Now please welcome me and start the interview`}];
    const { handleClick, isClicked, interviews, setResume, setFirstname, setSurname, setBio, setIsClicked,setCompany, setJobTitle, setStartDate, setEndDate, setSummary, setInterviews } = useStateContext();
    const navigate = useNavigate();

    useEffect(() => {
        fetchAndStartInterview();
    }, [interviewId]);

    const fetchAndStartInterview = async () => {
        const fetchedMessages = await fetchMessages();
        if (fetchedMessages.length === 0) {
            generateResponse(userMessage);
        }
    };

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

                    // Return updated messages array for state update
                    return updatedMessages;
                });
    
            },
            error: (error) => console.warn(error),
        });

        return () => {
            subscription.unsubscribe();
          };
    }, [interviewId]);

    const generateResponse = async (chatMessages) => {
        let apiMessages = [];
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
        
            const input = {
                sender: "ChatGPT",
                message: response.data,
                messageInterviewId: interviewId,
                direction: "incoming",
                type: "Message"
            };
              
            try {
                const result = await API.graphql(
                    graphqlOperation(createMessageMutation, { input })
                );
                return result;
            } catch (error) {
                console.error('Error creating message:', error);
                return null;
            }

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
                graphqlOperation(messagesByDate, {
                    type: "Message",
                    filter,
                    sortDirection: 'ASC'
                })
            );
            const fetchedMessages = result.data.messagesByDate.items;
            setMessages(fetchedMessages);
            return fetchedMessages;
        } catch (error) {
            console.error('Error fetching messages:', error);
            return [];
        }
    };

    return (
        <div className="nav-item absolute center card top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg">
            <button 
                type="button"
                onClick={() => {
                    navigate("/home")}
                }>
                <MdOutlineCancel className='h-6 w-6'/>
            </button>
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