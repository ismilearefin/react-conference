import { gql } from '@apollo/client';

const GET_CONFERENCES_DATA = gql` 
{
    conferences{
      id
      name
      slogan
      startDate
    }
  }
  
`;

const GET_CONFERENCE_BY_ID = gql`
query GetConferenceById($id: ID!) {
  conference(id: $id) {
    id
    name
    slogan
  }
}
`;
const GET_ORGRANIZER_BY_ID = gql`
query GetConferenceById($id: ID!) {
  conference(id: $id) {
    organizers{
      name
      about
      image {
        url
      }
    }
  }
}
`;
const GET_SPEAKERS_BY_ID = gql`
query GetConferenceById($id: ID!) {
  conference(id: $id) {
    speakers{
      name
      about
      image {
        url
      }
    }
  }
}
`;


export const dataQueries = {
  GET_CONFERENCES_DATA,
  GET_CONFERENCE_BY_ID,
  GET_ORGRANIZER_BY_ID,
  GET_SPEAKERS_BY_ID
}