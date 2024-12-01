import { Paper } from "@mui/material";
import { Footer } from "./Footer";
import { MainAppBar } from "./MainAppBar";
import { PropsWithChildren } from "react";

export function AppLayout(props: PropsWithChildren) {
  return (
    <Paper
      sx={{
        minHeight: "100vh",
      }}
    >
      <MainAppBar />
      {props.children}
      <Footer />
    </Paper>
  );
}
