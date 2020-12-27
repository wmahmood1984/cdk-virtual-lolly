/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


// const url =
// process.env.NODE_ENV === "development"
//   ? "http://localhost:8888"
//   //: "http://localhost:8888"
//   : "https://quizzical-williams-4f9b3c.netlify.app";

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: `https://fbbmocusy5dgng6elseajuggt4.appsync-api.eu-west-1.amazonaws.com/graphql`,
        headers: {
          "x-api-key": "da2-nuo2pxnjdjf2pdm3krclbqbd3i", // ENTER YOUR API KEY HERE
        },

      },
    },
  ],
}
