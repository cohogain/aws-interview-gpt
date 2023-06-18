import { API, graphqlOperation } from 'aws-amplify';
import { createMessage as createMessageMutation } from '../graphql/mutations';

export const createMessage = async ({ sender, message, messageInterviewId, direction }) => {
  const input = {
    sender: sender,
    message: message,
    messageInterviewId: messageInterviewId,
    direction: direction
  };
  console.log(input)
  try {
    const result = await API.graphql(
      graphqlOperation(createMessageMutation, { input })
    );
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error creating message:', error);
    return null;
  }
};