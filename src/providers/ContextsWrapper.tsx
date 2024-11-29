import { MuiThemeProvider } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { AuthProvider } from "./AuthProvider";

export function ContextsWrapper() {
  return (
    <MuiThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </MuiThemeProvider>
  );
}
