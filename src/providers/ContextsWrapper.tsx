import { MuiThemeProvider } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { AuthProvider } from "./AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MusicPlayerProvider } from "./MusicPlayerProvider";

const client = new QueryClient();

export function ContextsWrapper() {
  return (
    <MuiThemeProvider>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <MusicPlayerProvider />
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </MuiThemeProvider>
  );
}
