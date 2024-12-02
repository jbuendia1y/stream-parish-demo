import { Container, Skeleton, Typography } from "@mui/material";
import { Carousel } from "../../../components/Carousel";
import { useShows } from "../../../hooks/useShows";
import { ShowCard } from "../components/ShowCard";

export function RecommendedShows() {
  const { data: shows, isLoading } = useShows();

  return (
    <Container component="section" maxWidth="lg" sx={{ paddingY: 2.5 }}>
      <Typography component="h2" variant="h5" fontWeight="bold">
        Empieza una nueva aventura
      </Typography>
      {isLoading ? (
        <Carousel>
          {Array.from({ length: 5 }, (_, idx) => idx).map((idx) => (
            <Skeleton
              variant="rectangular"
              key={"skeleton-movie-card-recommended-" + idx}
            >
              <ShowCard
                show={
                  {
                    image: { url: "romeo_santos.jpeg" },
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </Skeleton>
          ))}
        </Carousel>
      ) : null}
      {shows ? (
        <Carousel>
          {shows.map((v) => (
            <ShowCard show={v} key={"show-card-recommended-" + v.id} />
          ))}
        </Carousel>
      ) : null}
    </Container>
  );
}
