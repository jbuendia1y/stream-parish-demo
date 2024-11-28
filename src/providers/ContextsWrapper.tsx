import { MuiThemeProvider } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";

export function ContextsWrapper() {
  return (
    <MuiThemeProvider>
      <RouterProvider router={router} />
    </MuiThemeProvider>
  );
}
