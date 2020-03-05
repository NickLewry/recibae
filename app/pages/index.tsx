import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <h1>Welcome to ReciBae</h1>
    <p>
      <Link href="/upload-recipe">Upload recipes</Link>
    </p>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
