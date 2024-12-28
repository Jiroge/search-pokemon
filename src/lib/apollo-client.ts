import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function makeClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql-pokemon2.vercel.app/',
      fetchOptions: { cache: 'no-store' }
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
    },
  });
}