"use client";

import type { ReactNode } from "react";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

import { API_URL } from "@/shared/const";

interface ApolloWrapperProps {
  children: ReactNode;
  serverCookie: string;
}

export const ApolloWrapper = ({ children, serverCookie }: ApolloWrapperProps) => {
  return (
    <ApolloNextAppProvider
      makeClient={() => {
        const httpLink = new HttpLink({
          uri: `${API_URL}/graphql`,
          headers: { cookie: serverCookie },
          credentials: "include",
        });

        return new ApolloClient({
          cache: new InMemoryCache(),
          link: httpLink,
        });
      }}
    >
      {children}
    </ApolloNextAppProvider>
  );
};
