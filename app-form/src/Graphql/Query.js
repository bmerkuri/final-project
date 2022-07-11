import { gql } from "@apollo/client";

export const Get = gql`
  {
    questions {
      id
      data
    }
  }
`;
