import { Paper } from "@mui/material";
import { Movie } from "../../../models/Movie";
import { Link } from "react-router-dom";

export function MovieItem({ movie }: { movie: Movie }) {
  return (
    <Link to={"/movies/" + movie.imdbid}>
      <Paper
        component="img"
        src={movie.image}
        loading="lazy"
        alt={movie.title}
        sx={{
          width: "250px",
          minHeight: "300px",
          aspectRatio: "16/9",
          objectPosition: "top",
          objectFit: "cover",
          filter: "brightness(50%)",
          transition: "filter .25s, transform .25s",
          scrollbarWidth: "none",
          ":hover": {
            filter: "brightness(100%)",
            transform: "scale(1.01)",
            zIndex: 10,
          },
        }}
      />
    </Link>
  );
}
