import dotenv from "dotenv";

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: "The best pizza place in town",
  },
  plugins: [
    // plugins can be a string or passed in as an object if you would like to add additional settins.
    "gatsby-plugin-styled-components",
    {
      // this is the name of the plugin you are adding
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ztbc4p4x",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
