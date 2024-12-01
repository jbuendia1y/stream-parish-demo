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
        <Skeleton>
          <MovieCard
            movie={
              {
                thumbnail: "",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } as any
            }
          />
        </Skeleton>
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
