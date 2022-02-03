import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_FLOWTALK = gql`
query flowTalks {
  flowTalks {
    _id
    flowTalkTitle
    flowTalkText
    flowTalkAuthor
    createdAt
  }
}
`;
export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;
