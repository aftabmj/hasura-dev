import gql from 'graphql-tag';

export const FRIENDS_QUERY = gql`
  query FriendsQuery {
    friend {
      id
      name
    }
  }
`;