import React from "react";
import Link from "next/link";
import gql from "graphql-tag";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";

import withData from "../lib/apollo";
import { Recipes } from "../components/recipes/Recipes";

const QUERY = gql`
  query getRecipe($userId: ID!) {
    getRecipe(userId: $userId) {
      name
      url
    }
  }
`;

const RecipeList: NextPage = props => {
  const { data, loading } = useQuery(QUERY, {
    variables: { userId: "Ysq7bvAMcXbWtk0FDDKg" }
  });

  if (loading) {
    return <div>Loading......</div>;
  }

  return (
    <div>
      <h1>ReciBae Recipes</h1>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      <p>
        <Link href="/upload-recipe">
          <a>Upload Recipe</a>
        </Link>
      </p>
      <div>
        <h3>Recipe List</h3>
        <Recipes recipes={data.getRecipe} />
      </div>
    </div>
  );
};

export default withData(RecipeList);
