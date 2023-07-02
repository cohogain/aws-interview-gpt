	
import React from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message } from '@chatscope/chat-ui-kit-react';
import { useStateContext } from '../context/ContextProvider';

const MessageContainer = ({ messages }) => {

    return (
        <div>
            <div style={{ position:"relative", height: "500px", width: "700px"  }}>
                <MainContainer className="rounded-lg mt-4 w-128 p-3 h-200">
                    <ChatContainer>      
                        <MessageList 
                            autoScrollToBottom={true}
                            scrollBehavior="auto" 
                            >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    )
}

export default MessageContainer;
