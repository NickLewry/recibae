import { gql } from "apollo-server";

export const schema = gql`
  type Recipe {
    id: ID!
    url: String!
    title: String!
  }

  type Query {
    getRecipe(id: ID!): Recipe
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Mutation {
    uploadRecipe(file: Upload!): File!
  }
`;
