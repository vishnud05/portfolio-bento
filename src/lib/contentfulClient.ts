import { createClient } from "contentful";

const createContentClient = () => {
  if (
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_ACCESS_TOKEN
  ) {
    throw new Error("Missing Contentful credentials");
  }

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

const client = createContentClient();

export default client;
