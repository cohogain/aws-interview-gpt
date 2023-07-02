import React, { useState, useEffect, useRef } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { messagesByDate, interviewsByDate } from '../graphql/queries';
import { MessagesList, SendMessage } from '../components';
import { useStateContext } from '../context/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { deleteInterview } from '../graphql/mutations';
 
const Home = () => {  
  const { handleClick, isClicked, interviews, setResume, setFirstname, setSurname, setBio, setCompany, setIsClicked, setJobTitle, setStartDate, setEndDate, setSummary, setInterviews } = useStateContext();
  const [showMessageList, setShowMessageList] = useState(false);
  const [messages, setMessages] = useState([]);
  const [interviewId, setInterviewId] = useState('');

  useEffect(() => {
    fetchInterviews();
  }, []);

  useEffect(() => {
    if (isClicked.chat && interviewId) {
      fetchMessages(interviewId);
    }
  }, [isClicked.chat, interviewId]);

  const fetchInterviews = async () => {
      try {
          const result = await API.graphql(
              graphqlOperation(interviewsByDate, {
                  type: "Interview",
                  sortDirection: 'ASC'
              })
          );
          const fetchedInterviews = result.data.interviewsByDate.items;
          console.log(fetchedInterviews)
          setInterviews(fetchedInterviews);
          return fetchedInterviews;
      } catch (error) {
          console.error('Error fetching interviews:', error);
          return [];
      }
  };

  const handleDelete = async (id) => {
    try {
        const input = {
          id: id,
        };
        const result = await API.graphql(
            graphqlOperation(deleteInterview, { input })
        );
        console.log(result.data)

        // Refresh the list of interviews
        await fetchInterviews();
        
        return result;

    } catch (error) {
        console.error('Error deleting interview:', error);
        return [];
    }
  };
  
  const fetchMessages = async (interviewId) => {
    console.log("fetching..")
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
        setShowMessageList(true);
        console.log(fetchedMessages)
        return fetchedMessages;
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
};

  if(showMessageList && isClicked.chat) {
    console.log(isClicked)
    return (
      <div className="nav-item absolute center card top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg">
        <button 
            type="button"
            onClick={() => {
                setIsClicked({["chat"]: false });}
            }>
            <MdOutlineCancel className='h-6 w-6'/>
        </button>
        <MessagesList
            messages={messages}
        />
      </div>)
  } else {
    return (
      <div className='mt-12'>
        <h2 className="flex justify-center text-lg mt-20 font-medium text-gray-700 mb-3">Completed assessments</h2>
        <div className='flex justify-center'>
          {!interviews ? (
            <p>No interviews found</p>
          ) : (
            <ul>
              {interviews.map((interview) => (
                <div 
                  key={interview.id} 
                  className="flex ml-5 bg-gray-100 rounded-lg p-4 mb-4 shadow-md cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    handleClick("chat");
                    setInterviewId(interview.id);
                  }}
                >
                  <div className="flex flex-grow justify-center items-center">
                    <div className="text-center">
                      <p className="font-medium text-gray-500">ID</p>
                      <p className="font-semibold text-lg mb-1">{interview.id}</p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center ml-10">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDelete(interview.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          )}  
        </div>
      </div>
    )
  }
}

export default Home