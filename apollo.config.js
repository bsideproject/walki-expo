module.exports = {
  client: {
    includes: ["./**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "walki",
      url: "http://api-walki-dev.ap-northeast-2.elasticbeanstalk.com/graphql",
    },
  },
};
