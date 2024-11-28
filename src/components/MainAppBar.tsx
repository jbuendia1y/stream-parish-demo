import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "inline-flex", lg: "none" } }}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 14C3.5 13.5359 3.68437 13.0908 4.01256 12.7626C4.34075 12.4344 4.78587 12.25 5.25 12.25H23.289C23.7531 12.25 24.1982 12.4344 24.5264 12.7626C24.8546 13.0908 25.039 13.5359 25.039 14C25.039 14.4641 24.8546 14.9092 24.5264 15.2374C24.1982 15.5656 23.7531 15.75 23.289 15.75H5.25C4.78587 15.75 4.34075 15.5656 4.01256 15.2374C3.68437 14.9092 3.5 14.4641 3.5 14ZM3.5 7C3.5 6.53587 3.68437 6.09075 4.01256 5.76256C4.34075 5.43437 4.78587 5.25 5.25 5.25H29.75C30.2141 5.25 30.6593 5.43437 30.9874 5.76256C31.3156 6.09075 31.5 6.53587 31.5 7C31.5 7.46413 31.3156 7.90925 30.9874 8.23744C30.6593 8.56563 30.2141 8.75 29.75 8.75H5.25C4.78587 8.75 4.34075 8.56563 4.01256 8.23744C3.68437 7.90925 3.5 7.46413 3.5 7ZM3.5 21C3.5 20.5359 3.68437 20.0908 4.01256 19.7626C4.34075 19.4344 4.78587 19.25 5.25 19.25H29.75C30.2141 19.25 30.6593 19.4344 30.9874 19.7626C31.3156 20.0908 31.5 20.5359 31.5 21C31.5 21.4641 31.3156 21.9092 30.9874 22.2374C30.6593 22.5656 30.2141 22.75 29.75 22.75H5.25C4.78587 22.75 4.34075 22.5656 4.01256 22.2374C3.68437 21.9092 3.5 21.4641 3.5 21ZM3.5 28C3.5 27.5359 3.68437 27.0908 4.01256 26.7626C4.34075 26.4344 4.78587 26.25 5.25 26.25H23.289C23.7531 26.25 24.1982 26.4344 24.5264 26.7626C24.8546 27.0908 25.039 27.5359 25.039 28C25.039 28.4641 24.8546 28.9093 24.5264 29.2374C24.1982 29.5656 23.7531 29.75 23.289 29.75H5.25C4.78587 29.75 4.34075 29.5656 4.01256 29.2374C3.68437 28.9093 3.5 28.4641 3.5 28Z"
                fill="white"
              />
            </svg>
          </IconButton>
          <Typography
            variant="h6"
            component="p"
            fontWeight="bold"
            display={"flex"}
            flexGrow={1}
            color="white"
          >
            StreamParish
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.25}
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            <Stack
              direction="row"
              flexGrow={1}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Button sx={{ my: 2, color: "white" }} component={Link} to="/">
                Inicio
              </Button>
              <Button
                sx={{ my: 2, color: "white" }}
                component={Link}
                to="/movies"
              >
                Lista de peliculas
              </Button>
              <Button
                sx={{ my: 2, color: "white" }}
                component={Link}
                to={"/shows?status=current"}
              >
                En emisión
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
