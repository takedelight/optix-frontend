"use client";

import type { ReactNode } from "react";

import { ApolloProvider as ApolloClientProvider } from "@apollo/client/react";

import { apolloClient } from "@/shared/api";

interface ApolloProviderProps {
  children: ReactNode;
}

export const ApolloProvider = ({ children }: ApolloProviderProps) => {
  return <ApolloClientProvider client={apolloClient}>{children}</ApolloClientProvider>;
};
