import { Container, Skeleton, Typography } from "@mui/material";
import { useSongs } from "../../../hooks/useSongs";
import { SongCard } from "../components/SongCard";
import { Carousel } from "../../../components/Carousel";
import { SongTrack } from "../../../models/SongTrack";
import { useMusicPlayer } from "../../../hooks/useMusicPlayer";

export function RecommendedSongs() {
  const { data: songs, isLoading } = useSongs();
  const { addToPlayerTrack: play } = useMusicPlayer();
  const handlePlay = (track: SongTrack) => {
    play(track);
  };

  return (
    <Container component="section" maxWidth="lg" sx={{ paddingY: 2.5 }}>
      <Typography component="h2" variant="h5" fontWeight="bold">
        Canciones a tu medida
      </Typography>
      {isLoading ? (
        <Carousel>
          {Array.from({ length: 5 }, (_, idx) => idx).map((idx) => (
            <Skeleton
              variant="rectangular"
              key={"skeleton-movie-card-recommended-" + idx}
            >
              <SongCard
                track={
                  {
                    album: { images: [{ url: "/romeo_santos.jpeg" }] },
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </Skeleton>
          ))}
        </Carousel>
      ) : null}
      {songs ? (
        <Carousel>
          {songs.map((v) => (
            <SongCard
              onPreview={handlePlay}
              track={v}
              key={"song-card-recommended-" + v.id}
            />
          ))}
        </Carousel>
      ) : null}
    </Container>
  );
}
