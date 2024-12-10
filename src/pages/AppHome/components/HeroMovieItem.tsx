import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FaPlay, FaRegStar } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import {
  IoIosAddCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";

import { Movie } from "../../../models/Movie";
import { Link } from "react-router-dom";

interface HeroMovie extends Movie {
  srcset: string;
}

export function HeroMovieItem({ movie }: { movie: HeroMovie }) {
  return (
    <Box component="article" position="relative" sx={{ flex: "0 0 100%" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Container maxWidth="lg" sx={{ paddingBottom: 10 }}>
          <Typography
            component="p"
            variant="body2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <FaRegStar />
            {movie.rating}
          </Typography>
          <Typography component="h2" variant="h4" fontWeight="bold">
            {movie.title}
          </Typography>
          <Typography component="p" variant="body1" maxWidth="450px">
            {movie.description}
          </Typography>
          <Typography component="p" variant="body2">
            {movie.genre.join(", ")}
          </Typography>
          <Stack direction="row" spacing={1} marginTop={1}>
            <Button
              startIcon={<FaPlay />}
              variant="contained"
              color="secondary"
              size="small"
            >
              Play
            </Button>
            <Button
              component={Link}
              to={"/movies/" + movie.imdbid}
              startIcon={<IoMdInformationCircleOutline />}
              variant="outlined"
              color="inherit"
              size="small"
            >
              More info
            </Button>
            <IconButton
              size="small"
              aria-label="add to my list"
              sx={{
                borderColor: (theme) => theme.palette.grey.A700,
                color: "#fff",
              }}
            >
              <IoIosAddCircleOutline size="20px" fill="#fff" />
            </IconButton>
            <IconButton
              size="small"
              aria-label="like"
              sx={{
                borderColor: (theme) => theme.palette.grey.A700,
                color: "#fff",
              }}
            >
              <SlLike size="20px" fill="#fff" />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      <Box
        component="img"
        src={movie.image}
        srcSet={movie.srcset}
        width="100%"
        height={["350px", "400px"]}
        sx={{
          objectFit: "cover",
          filter: "brightness(80%)",
        }}
      ></Box>
    </Box>
  );
}
