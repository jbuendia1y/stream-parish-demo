import { Box, Stack } from "@mui/material";

export function HomeMovies() {
  return (
    <Stack
      direction="row"
      sx={{
        position: "relative",
        minWidth: "max-content",
        display: "inline-flex",
        height: ["400px", "400px", "600px"],
        translate: ["", "", "translateX(30px)"],
        gap: "7px",
      }}
      className="movies-list"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          boxShadow: (theme) =>
            `inset 0 0 30px 32.5px ${theme.palette.background.default}`,
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        sx={{
          maxWidth: ["225px", "225px", "250px"],
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src="barbie.webp"
        alt="Barbie movie"
      />
      <Box
        component="img"
        sx={{
          maxWidth: "225px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src="romeo_santos.jpeg"
        alt="Romeo Santos"
      />
      <Box
        component="img"
        sx={{
          maxWidth: "225px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src="pianista.jpg"
        alt="Pianist movie"
      />
    </Stack>
  );
}
