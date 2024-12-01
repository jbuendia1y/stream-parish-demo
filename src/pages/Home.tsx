import { Box } from "@mui/material";
import { HomeMovies } from "../components/HomeMovies";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
      component="main"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: [
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ],
          gap: [10, 10, 10, 0],
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth={(theme) => theme.breakpoints.values.xl}
        marginX="auto"
        minHeight="100vh"
        overflow="hidden"
      >
        <Hero />
        <HomeMovies />
      </Box>
    </Box>
  );
}
