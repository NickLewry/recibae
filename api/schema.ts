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

  type Mutation {
    createRecipe(title: String!): Recipe
  }
`;
