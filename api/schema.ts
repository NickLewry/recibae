import { gql } from "apollo-server";

export const schema = gql`
  type Recipe {
    id: ID
    userId: String
    url: String
    name: String
  }

  type Query {
    getRecipe(userId: ID!): [Recipe]
  }

  type Mutation {
    uploadRecipe(file: Upload!): Recipe!
  }
`;
