import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

export const client = new ApolloClient({
  uri: "http://api-walki-dev.ap-northeast-2.elasticbeanstalk.com/gui",
  cache: new InMemoryCache(),
});
