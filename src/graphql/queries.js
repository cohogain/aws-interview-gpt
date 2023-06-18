/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        interviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInterview = /* GraphQL */ `
  query GetInterview($id: ID!) {
    getInterview(id: $id) {
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
          message
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
export const listInterviews = /* GraphQL */ `
  query ListInterviews(
    $filter: ModelInterviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
      message
      createdAt
      updatedAt
      interviewMessageId
    }
  }
`;

export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput!
    ) { 
    listMessages(filter: $filter, sortDirection: 'DESC') {
      items {
        id
        message
        sender
        direction
      }
      nextToken
    }
  }
`;
