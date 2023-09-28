import { gql } from '@apollo/client';

export const GET_DATA = gql`
  
{
    conferences{
      id
      name
      slogan
      startDate
      year
    }
  }
  
`;