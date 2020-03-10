import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage = () => (
  <div>
    <h1>Welcome to ReciBae</h1>
    <p>
      <Link href="/upload-recipe">
        <a>Upload recipes</a>
      </Link>
    </p>
  </div>
);

export default Home;
