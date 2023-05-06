/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
export const onCreateInterview = /* GraphQL */ `
  subscription OnCreateInterview(
    $filter: ModelSubscriptionInterviewFilterInput
  ) {
    onCreateInterview(filter: $filter) {
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
export const onUpdateInterview = /* GraphQL */ `
  subscription OnUpdateInterview(
    $filter: ModelSubscriptionInterviewFilterInput
  ) {
    onUpdateInterview(filter: $filter) {
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
export const onDeleteInterview = /* GraphQL */ `
  subscription OnDeleteInterview(
    $filter: ModelSubscriptionInterviewFilterInput
  ) {
    onDeleteInterview(filter: $filter) {
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
export const onCreateMessage1 = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage{
    onCreateMessage {
      sender
      message
      messageInterviewId
      direction
    }
  }
`;
