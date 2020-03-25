import React from "react";
import Link from "next/link";
import gql from "graphql-tag";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to ReciBae</h1>
      <p>
        <Link href="/upload-recipe">
          <a>Upload recipes</a>
        </Link>
      </p>
      <p>
        <Link href="/recipes">
          <a>Recipes</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
