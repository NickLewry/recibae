import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const UploadRecipe: NextPage = () => (
  <div>
    <h1>Upload Recipe</h1>
    <button>Upload</button>
    <Link href="/">Go Home</Link>
  </div>
);

export default UploadRecipe;
