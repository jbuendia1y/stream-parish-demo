import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieData } from "../../services/movies-data";
import { AppLayout } from "../../components/AppLayout";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { FaPlay } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { getTmdbResponsiveImage } from "../../libs/tmdb";
import { MovieActorsList } from "./views/MovieActorsList";

export const AppMovie = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => {
      if (!movieId) return Promise.resolve(null);
      return getMovieData(movieId);
    },
    enabled: !!movieId,
  });

  const coverImage = movie
    ? getTmdbResponsiveImage(movie?.coverImage)
    : { src: undefined, srcSet: undefined };

  return (
    <AppLayout>
      <Box position="relative">
        <Box
          {...(!isLoading && movie
            ? {
                component: "img",
                src: coverImage.src,
                srcSet: coverImage.srcSet,
                alt: movie?.title,
              }
            : {
                component: Skeleton,
              })}
          sx={{
            display: ["none", "block"],
            width: "100%",
            minHeight: 200,
            maxHeight: 335,
            objectFit: "cover",
            aspectRatio: "16/9",
            backgroundColor: (theme) => theme.palette.info.dark,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient( 360deg, rgba(0, 0, 0, 0.6) 0%, rgba(217, 217, 217, 0) 100% )",
          }}
        ></Box>
      </Box>
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            maxWidth: "90%",
            marginX: "auto",
            boxSizing: "border-box",
          }}
        >
          <Box>
            <Stack direction={["column", "row"]} sx={{ gap: 3, paddingY: 2 }}>
              <Box sx={{ maxHeight: 300 }}>
                {isLoading ? (
                  <Skeleton
                    height={400}
                    sx={{
                      width: ["auto", 300],
                      transform: ["none", "translateY(-100px)"],
                    }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={movie?.image}
                    alt={movie?.title}
                    sx={{
                      aspectRatio: "9/16",
                      objectFit: "cover",
                      height: ["auto", 400],
                      width: ["100%", 300],
                      maxHeight: [300, "unset"],
                      borderRadius: 2,
                      transform: ["none", "translateY(-100px)"],
                    }}
                  />
                )}
              </Box>

              {isLoading ? (
                <Box>
                  <Skeleton>
                    <Typography variant="h4" fontWeight="bold">
                      Loading title
                    </Typography>
                  </Skeleton>
                  <Skeleton>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto alias dignissimos ipsam voluptatibus esse vero
                      quisquam similique. Ipsam, at aut! Ad, neque in.
                      Consequuntur optio.
                    </Typography>
                  </Skeleton>
                </Box>
              ) : (
                <Box>
                  <Typography variant="h4" component="h1" fontWeight="bold">
                    {movie?.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{ marginY: 0.5 }}
                  >
                    2h 30min | {movie?.year} | Película
                  </Typography>
                  <Typography sx={{ textWrap: "pretty" }}>
                    {movie?.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ marginY: 1.5 }}
                  >
                    {movie?.genre.map((genre) => (
                      <Chip
                        label={genre}
                        color="secondary"
                        variant="outlined"
                        size="small"
                        key={`movie-${movie.id}-genre-chip-${genre}`}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row">
                    <Button
                      startIcon={<FaPlay />}
                      variant="contained"
                      color="secondary"
                      size="medium"
                    >
                      Play
                    </Button>
                    <IconButton
                      size="medium"
                      aria-label="add to my list"
                      sx={{
                        borderColor: (theme) => theme.palette.grey.A700,
                        color: "#fff",
                      }}
                    >
                      <IoIosAddCircleOutline size="20px" fill="#fff" />
                    </IconButton>
                    <IconButton
                      size="medium"
                      aria-label="like"
                      sx={{
                        borderColor: (theme) => theme.palette.grey.A700,
                        color: "#fff",
                      }}
                    >
                      <SlLike size="20px" fill="#fff" />
                    </IconButton>
                  </Stack>
                </Box>
              )}
            </Stack>
            <MovieActorsList movieId={movie?.imdbid}></MovieActorsList>
          </Box>
        </Box>
      </Container>
    </AppLayout>
  );
};
