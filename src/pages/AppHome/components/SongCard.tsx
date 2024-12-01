import { Box, IconButton, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { SongTrack } from "../../../models/SongTrack";

export function SongCard({
  track,
  onPreview = () => {},
}: {
  track: SongTrack;
  onPreview?: (track: SongTrack) => void;
}) {
  const image = track.album.images[0];

  return (
    <Box position="relative">
      <IconButton
        onClick={() => onPreview(track)}
        sx={{
          boxShadow: 5,
          position: "absolute",
          bottom: 20,
          right: 20,
          padding: 2,
          backgroundColor: (theme) => theme.palette.success.main,
          transition: "transform .1s ease-in",
          ":hover": {
            backgroundColor: "rgb(218, 218, 218)",
            transform: "scale(1.2)",
          },
        }}
      >
        <FaPlay fill="#000" />
      </IconButton>
      <Link to={"#" + track.id}>
        <Paper
          component="img"
          src={image.url}
          alt={track.album.name}
          loading="lazy"
          sx={{
            width: 300,
            minHeight: 300,
            aspectRatio: "3/2",
            objectFit: "cover",
          }}
        />
      </Link>
    </Box>
  );
}
