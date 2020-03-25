import React from "react";
import styled from "styled-components";

interface Recipe {
  id: string;
  name: string;
  url: string;
}

interface Props {
  recipes: Recipe[];
}

export const Recipes: React.FC<Props> = props => {
  if (!props.recipes.length) {
    return <div>Hi</div>;
  }
  return (
    <div>
      <h3>Your current Recipes</h3>
      {props.recipes.map((recipe, key) => (
        <SingleRecipe {...recipe} key={key} />
      ))}
    </div>
  );
};

export const SingleRecipe: React.FC<Recipe> = (recipe: Recipe) => {
  return (
    <RecipeTile>
      <h3>{recipe.name}</h3>
      <div>
        <img
          src={`https://storage.googleapis.com/img-test-nick/${recipe.url}`}
          alt=""
        />
      </div>
    </RecipeTile>
  );
};

const RecipeTile = styled.div`
  height: 100px;
  width: 100px;
`;
