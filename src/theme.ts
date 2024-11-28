import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#11002c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      contrastText: "#fff",
    },
    background: {
      default: "#350e56",
      paper: "#350e56",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(230,230,230,0.6)",
      disabled: "rgba(193,193,193,0.38)",
      // hint: "#8f8fa0",
    },
    divider: "rgba(247,247,247,0.12)",
  },
});
