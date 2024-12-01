import { Paper } from "@mui/material";
import { TvShow } from "../../../models/TvShow";
import { Link } from "react-router-dom";

export function ShowCard({ show }: { show: TvShow }) {
  const image = show.image;

  return (
    <Link to="#">
      <Paper
        component="img"
        src={image.url}
        alt={show.title}
        loading="lazy"
        sx={{
          width: 300,
          minHeight: 300,
          aspectRatio: "3/2",
          objectFit: "cover",
          filter: "brightness(75%)",
          transition: "filter .25s",
          scrollbarWidth: "none",
          ":hover": {
            filter: "brightness(100%)",
          },
        }}
      />
    </Link>
  );
}
