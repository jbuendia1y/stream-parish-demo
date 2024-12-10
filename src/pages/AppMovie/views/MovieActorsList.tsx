import { useQuery } from "@tanstack/react-query";
import { getMovieActors } from "../../../services/movies-data";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { getTmdbResponsiveImage } from "../../../libs/tmdb";
import { FaUser } from "react-icons/fa";

export const MovieActorsList = ({ movieId }: { movieId?: string }) => {
  const { data: actors, isLoading } = useQuery({
    queryKey: ["movie", "actors", movieId],
    queryFn: async () => {
      if (!movieId) return null;
      return getMovieActors(movieId);
    },
    enabled: !!movieId,
  });

  return (
    <Stack
      component="section"
      sx={{
        paddingY: 2,
      }}
    >
      <Typography
        component="h2"
        variant="h5"
        fontWeight="bold"
        sx={{ marginY: 2 }}
      >
        Actores
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 150px)",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {!isLoading && actors ? (
          actors.map((actor) => {
            const actorImage = actor.profile_path
              ? getTmdbResponsiveImage(actor.profile_path)
              : { src: undefined, srcSet: undefined };

            return (
              <Box
                component="article"
                key={"actor-of-movie-" + movieId + "-with-id" + actor.id}
              >
                <Box
                  component={actorImage.src ? "img" : FaUser}
                  color={"gray"}
                  src={actorImage.src}
                  srcSet={actorImage.srcSet}
                  alt={actor.name}
                  loading="lazy"
                  sx={{
                    width: 150,
                    height: 150,
                    objectFit: "cover",
                    display: "inline-block",
                    backgroundColor: (theme) => theme.palette.grey[50],
                  }}
                />
                <Typography component="h3" variant="body1">
                  {actor.name}
                </Typography>
              </Box>
            );
          })
        ) : (
          <Skeleton>
            <Box sx={{ width: 150, height: 150 }} />
            <Typography component="h3" variant="body1">
              Actor name
            </Typography>
          </Skeleton>
        )}
      </Box>
    </Stack>
  );
};
