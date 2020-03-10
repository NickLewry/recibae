import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import withData from "../lib/apollo";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const UPLOAD_MUTATION = gql`
  mutation upload($file: Upload!) {
    uploadRecipe(file: $file) {
      filename
    }
  }
`;

const UploadRecipe: NextPage = () => {
  const [mutate, { loading, error }] = useMutation(UPLOAD_MUTATION);

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
