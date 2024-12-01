import { Paper } from "@mui/material";
import { Movie } from "../../../models/Movie";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  return (
    <Link to={"#" + movie.id}>
      <Paper
        component="img"
        src={movie.image}
        loading="lazy"
        alt={movie.title}
        sx={{
          width: "250px",
          minHeight: "200px",
          aspectRatio: "16/9",
          objectPosition: "middle",
          objectFit: "cover",
          filter: "brightness(50%)",
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
