import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const CREATE_FLOWTALK = gql`
  mutation createFlowTalk($flowTalkTitle: String!, $flowTalkText: String!) {
    createFlowTalk(flowTalkTitle: $flowTalkTitle, flowTalkText: $flowTalkText) {
      _id
      flowTalkTitle
      flowTalkText
      flowTalkAuthor
      createdAt
    }
  }
`;

export const REMOVE_FLOWTALK = gql`
  mutation removeflowTalk($flowTalkId: ID!) {
    removeflowTalk(flowTalkId: $flowTalkId) {
      flowTalkTitle
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentId: ID!, $commentText: String!) {
    addComment(commentId: $commentId, commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
