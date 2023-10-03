import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.react-finland.fi/graphql", //GraphQL API endpoint
  }),
});

export default client;
