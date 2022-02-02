import { gql } from '@apollo/client';

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
        _id
        username
      }
    }
  }
`;

export const CREATE_FLOWTALK = gql`
  mutation createFlowTalk($flowTalkTitle: String!, $flowTalkText: String!, $flowTalkAuthor: String!) {
    createMatchup(flowTalkTitle: $flowTalkTitle, flowTalkText: $flowTalkText, flowTalkAuthor: $flowTalkAuthor) {
      _id
      flowTalkTitle
      flowTalkText
      flowTalkAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
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