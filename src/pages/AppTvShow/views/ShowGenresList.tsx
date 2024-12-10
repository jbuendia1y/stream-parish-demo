import { Chip, Skeleton, Stack } from "@mui/material";
import { TvShow } from "../../../models/TvShow";

export const ShowGenresList = ({ show }: { show?: TvShow }) => {
  if (!show)
    return (
      <Skeleton variant="rectangular">
        <Chip label="Category 1" />
      </Skeleton>
    );
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {show.genres.map((genre) => (
        <Chip label={genre} color="secondary" variant="outlined" />
      ))}
    </Stack>
  );
};
