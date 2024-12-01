import { Container, Skeleton, Typography } from "@mui/material";
import { useSongs } from "../../../hooks/useSongs";
import { SongCard } from "../components/SongCard";
import { Carousel } from "../../../components/Carousel";

export function RecommendedSongs() {
  const { data: songs, isLoading } = useSongs();

  return (
    <Container component="section" maxWidth="lg" sx={{ paddingY: 2.5 }}>
      <Typography component="h2" variant="h5" fontWeight="bold">
        Canciones a tu medida
      </Typography>
      {isLoading ? (
        <Skeleton>
          <SongCard
            track={
              {
                name: "",
                album: { images: [{ url: "", width: 300, height: 300 }] },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } as any
            }
          />
        </Skeleton>
      ) : null}
      {songs ? (
        <Carousel>
          {songs.map((v) => (
            <SongCard track={v} key={"song-card-recommended-" + v.id} />
          ))}
        </Carousel>
      ) : null}
    </Container>
  );
}
