"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider as NextClientProvider } from "react-query";

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: PropsWithChildren ) => {
  return(
    <NextClientProvider client={queryClient}>
      {children}
    </NextClientProvider>
  )
}