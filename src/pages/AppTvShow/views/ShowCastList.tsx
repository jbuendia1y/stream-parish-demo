import { useQuery } from "@tanstack/react-query";
import { TvShow } from "../../../models/TvShow";
import { getShowActors } from "../../../services/shows-data";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa";

export const ShowCastList = ({ show }: { show?: TvShow }) => {
  const { data: cast, isLoading } = useQuery({
    queryKey: ["show", "cast", show?.id],
    queryFn: async () => {
      if (!show?.id) return null;
      return getShowActors(show?.id);
    },
    enabled: !!show,
  });

  return (
    <Stack
      component="section"
      sx={{ maxWidth: "90%", marginX: "auto", marginY: 2 }}
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
        }}
      >
        {!isLoading && cast ? (
          cast.map((actor) => (
            <Box component="article">
              <Box
                component={actor.person.image ? "img" : FaUser}
                color={"gray"}
                src={actor.person.image ?? undefined}
                alt={actor.person.image ? actor.person.name : undefined}
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
                {actor.person.name}
              </Typography>
            </Box>
          ))
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
