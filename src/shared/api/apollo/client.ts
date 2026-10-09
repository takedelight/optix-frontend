import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { API_URL } from "@/shared/const";

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  // Session cookie for better-auth on the backend (requireSession in resolvers),
  // CORS on api.optix.local already allows https://app.optix.local with credentials
  credentials: "include",
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
