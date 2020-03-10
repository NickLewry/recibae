export const mutationResolvers = {
  uploadRecipe: async (parent: any, { file }: any) => {
    const { createReadStream, filename, mimetype, encoding } = await file;

    //TODO upload file to bucket somewhere

    return { filename, mimetype, encoding, url: "" };
  }
};
