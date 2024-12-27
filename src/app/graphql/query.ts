import { gql } from "@apollo/client";

export const GET_COUNTRIES_QUERY = gql`
  query($searchText: String!) {
    countries(filter: {
      name: {
        regex: $searchText
      }
    }) {
      code
      name
      continent {
        name
      }
    }
  }
`;
