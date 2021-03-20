module.exports = {
  siteMetadata: {
    title: "Shoaib Alyaan Portfolio",
    siteUrl:`https://shodevacc.github.io/`,
    description: `A website about Shoaib Alyaan. It includes his academic work, other projects, work experience information, resume, and contact information`,
    author: `@shoaibalyaan`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/SHO.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
