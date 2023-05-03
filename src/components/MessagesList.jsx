	
import React from "react";
import { MainContainer, ChatContainer, MessageList, Message } from '@chatscope/chat-ui-kit-react';

export default ({ messages }) => (
  <div style={{ position:"relative", height: "800px", width: "700px"  }}>
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
);