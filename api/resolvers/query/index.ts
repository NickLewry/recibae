export const queryResolvers = {
  getRecipe: async (parent: any, args: any, context: any) => getRecipe(args)
};

const getRecipe = (args: any) => {
  return {
    id: "1",
    url: "someurl",
    title: "this is a recipe"
  };
};
