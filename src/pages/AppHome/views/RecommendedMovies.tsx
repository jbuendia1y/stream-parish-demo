import { Container, Skeleton, Typography } from "@mui/material";
import { useMovies } from "../../../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import { Carousel } from "../../../components/Carousel";

export function RecommendedMovies() {
  const { data: movies, isLoading } = useMovies();

  return (
    <Container component="section" maxWidth="lg" sx={{ paddingY: 2.5 }}>
      <Typography component="h2" variant="h5" fontWeight="bold">
        Películas recomendadas
      </Typography>
      {isLoading ? (
        <Carousel>
          {Array.from({ length: 5 }, (_, idx) => idx).map((idx) => (
            <Skeleton
              variant="rectangular"
              key={"skeleton-movie-card-recommended-" + idx}
            >
              <MovieCard
                movie={
                  {
                    image: "/romeo_santos.jpeg",
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </Skeleton>
          ))}
        </Carousel>
      ) : null}
      {movies ? (
        <Carousel>
          {movies.map((v) => (
            <MovieCard movie={v} key={"movie-card-recommended-" + v.id} />
          ))}
        </Carousel>
      ) : null}
    </Container>
  );
}
