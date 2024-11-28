import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
