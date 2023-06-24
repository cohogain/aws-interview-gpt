import { API, graphqlOperation } from 'aws-amplify';
import { createInterview as createInterviewMutation } from '../graphql/mutations';

export const createInterview = async ({ title, experience, interviewType }) => {
  const input = {
    title: title,
    experience: experience,
    interviewType: interviewType,
    type: "Interview"
  };
  console.log(input)
  try {
    const result = await API.graphql(
      graphqlOperation(createInterviewMutation, { input })
    );
    return result;
  } catch (error) {
    console.error('Error creating interview:', error);
    return null;
  }
};