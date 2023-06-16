import { API, graphqlOperation } from 'aws-amplify';
import { createMessage as createMessageMutation } from '../graphql/mutations';

export const createMessage = async ({ sender, message, messageInterviewId, direction }) => {
  const input = {
    sender,
    message,
    messageInterviewId,
    direction
  };

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