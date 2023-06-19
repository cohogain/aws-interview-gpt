/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInterview = /* GraphQL */ `
  subscription OnCreateInterview(
    $filter: ModelSubscriptionInterviewFilterInput
    $owner: String
  ) {
    onCreateInterview(filter: $filter, owner: $owner) {
      id
      title
      profileInterviewsId
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateInterview = /* GraphQL */ `
  subscription OnUpdateInterview(
    $filter: ModelSubscriptionInterviewFilterInput
    $owner: String
  ) {
    onUpdateInterview(filter: $filter, owner: $owner) {
      id
      title
      profileInterviewsId
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteInterview = /* GraphQL */ `
  subscription OnDeleteInterview(
    $filter: ModelSubscriptionInterviewFilterInput
    $owner: String
  ) {
    onDeleteInterview(filter: $filter, owner: $owner) {
      id
      title
      profileInterviewsId
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
  ) {
    onCreateMessage(filter: $filter) {
      sender
      messageInterviewId
      message
      direction
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
      id
      sender
      messageInterviewId
      message
      direction
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
      id
      sender
      messageInterviewId
      message
      direction
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
