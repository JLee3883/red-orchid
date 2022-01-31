import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
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

// export const CREATE_FLOW_TITLE = gql`
//   mutation createFlowTitle($tech1: String!, $tech2: String!) {
//     createMatchup(tech1: $tech1, tech2: $tech2) {
//       _id
//       tech1
//       tech2
//     }
//   }
// `;

export const ADD_COMMENT = gql`
  mutation addComment(
    $commentId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      commentId: $thoughtId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
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