/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      interviews {
        items {
          id
          title
          createdAt
          updatedAt
          profileInterviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      interviews {
        items {
          id
          title
          createdAt
          updatedAt
          profileInterviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      name
      interviews {
        items {
          id
          title
          createdAt
          updatedAt
          profileInterviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInterview = /* GraphQL */ `
  mutation CreateInterview(
    $input: CreateInterviewInput!
    $condition: ModelInterviewConditionInput
  ) {
    createInterview(input: $input, condition: $condition) {
      id
      title
      profile {
        id
        name
        interviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      message {
        items {
          id
          sender
          content
          createdAt
          updatedAt
          interviewMessageId
        }
        nextToken
      }
      createdAt
      updatedAt
      profileInterviewsId
    }
  }
`;
export const updateInterview = /* GraphQL */ `
  mutation UpdateInterview(
    $input: UpdateInterviewInput!
    $condition: ModelInterviewConditionInput
  ) {
    updateInterview(input: $input, condition: $condition) {
      id
      title
      profile {
        id
        name
        interviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      message {
        items {
          id
          sender
          content
          createdAt
          updatedAt
          interviewMessageId
        }
        nextToken
      }
      createdAt
      updatedAt
      profileInterviewsId
    }
  }
`;
export const deleteInterview = /* GraphQL */ `
  mutation DeleteInterview(
    $input: DeleteInterviewInput!
    $condition: ModelInterviewConditionInput
  ) {
    deleteInterview(input: $input, condition: $condition) {
      id
      title
      profile {
        id
        name
        interviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      message {
        items {
          id
          sender
          content
          createdAt
          updatedAt
          interviewMessageId
        }
        nextToken
      }
      createdAt
      updatedAt
      profileInterviewsId
    }
  }
`;
export const createMessage1 = /* GraphQL */ `
  mutation CreateMessage1(
    $input: CreateMessageInput!
  ) {
    createMessage1(input: $input, condition: $condition) {
      id
      sender
      interview {
        id
        title
        profile {
          id
          name
          createdAt
          updatedAt
        }
        message {
          nextToken
        }
        createdAt
        updatedAt
        profileInterviewsId
      }
      content
      createdAt
      updatedAt
      interviewMessageId
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      sender
      interview {
        id
        title
        profile {
          id
          name
          createdAt
          updatedAt
        }
        message {
          nextToken
        }
        createdAt
        updatedAt
        profileInterviewsId
      }
      content
      createdAt
      updatedAt
      interviewMessageId
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      message
      sender
      messageInterviewId
      direction
    }
  }
`;
