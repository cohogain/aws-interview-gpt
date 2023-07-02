import { API, graphqlOperation } from 'aws-amplify';
import { createMessage as createMessageMutation } from '../graphql/mutations';
import { useStateContext } from '../context/ContextProvider';

export const createMessage = async ({ sender, message, messageInterviewId, direction }) => {
  const input = {
    sender: sender,
    message: message,
    messageInterviewId: messageInterviewId,
    direction: direction,
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
};