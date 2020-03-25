import React from "react";
import Link from "next/link";
import gql from "graphql-tag";
import { NextPage } from "next";
import { useMutation } from "@apollo/react-hooks";

import withData from "../lib/apollo";

const UPLOAD_MUTATION = gql`
  mutation upload($file: Upload!) {
    uploadRecipe(file: $file) {
      id
      userId
      name
      url
    }
  }
`;

const UploadRecipe: NextPage = () => {
  const [mutate] = useMutation(UPLOAD_MUTATION);

  const onChange = ({
    target: {
      validity,
      files: [file]
    }
  }: any) => validity.valid && mutate({ variables: { file } });

  return (
    <div>
      <h1>Upload Recipe</h1>
      <form>
        <input type="file" onChange={onChange} />
      </form>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  );
};

export default withData(UploadRecipe);
