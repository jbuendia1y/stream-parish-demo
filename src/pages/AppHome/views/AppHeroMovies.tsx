import { Box } from "@mui/material";
import { Movie } from "../../../models/Movie";
import { InfiniteCarousel } from "../../../components/InfiniteCarousel";
import { HeroMovieItem } from "../components/HeroMovieItem";

interface HeroMovie extends Movie {
  srcset: string;
}

export function AppHeroMovies() {
  const movies: Array<HeroMovie> = [
    {
      rank: 32,
      title: "Oppenheimer",
      description:
        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmJjMjBmMWEtYTRhYS00OTdjLWFjYmEtY2FiY2I4Y2MzOTEwXkEyXkFqcGc@._V1_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top32",
      year: 2023,
      imdbid: "tt15398776",
      imdb_link: "https://www.imdb.com/title/tt15398776",
      srcset:
        "https://m.media-amazon.com/images/M/MV5BNmJjMjBmMWEtYTRhYS00OTdjLWFjYmEtY2FiY2I4Y2MzOTEwXkEyXkFqcGc@._V1_FMjpg_UX320_.jpg 320w, https://m.media-amazon.com/images/M/MV5BNmJjMjBmMWEtYTRhYS00OTdjLWFjYmEtY2FiY2I4Y2MzOTEwXkEyXkFqcGc@._V1_FMjpg_UX480_.jpg 480w, https://m.media-amazon.com/images/M/MV5BNmJjMjBmMWEtYTRhYS00OTdjLWFjYmEtY2FiY2I4Y2MzOTEwXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg 600w, https://m.media-amazon.com/images/M/MV5BNmJjMjBmMWEtYTRhYS00OTdjLWFjYmEtY2FiY2I4Y2MzOTEwXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg 1024w, https://m.media-amazon.com/images/M/MV5BNmJjMjBmMWEtYTRhYS00OTdjLWFjYmEtY2FiY2I4Y2MzOTEwXkEyXkFqcGc@._V1_FMjpg_UX1280_.jpg 1280w, https://m.media-amazon.com/images/M/MV5BNmJjMjBmMWEtYTRhYS00OTdjLWFjYmEtY2FiY2I4Y2MzOTEwXkEyXkFqcGc@._V1_FMjpg_UX1900_.jpg 1900w",
    },
    {
      rank: 35,
      title: "The Pianist",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2JmNGFiNTctYmIyYi00NGU4LWI2OWYtMjNkODQzYjJmZjgzXkEyXkFqcGc@._V1_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
      genre: ["Biography", "Drama", "Music"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
      rating: "8.5",
      srcset:
        "https://m.media-amazon.com/images/M/MV5BN2JmNGFiNTctYmIyYi00NGU4LWI2OWYtMjNkODQzYjJmZjgzXkEyXkFqcGc@._V1_FMjpg_UX320_.jpg 320w, https://m.media-amazon.com/images/M/MV5BN2JmNGFiNTctYmIyYi00NGU4LWI2OWYtMjNkODQzYjJmZjgzXkEyXkFqcGc@._V1_FMjpg_UX480_.jpg 480w, https://m.media-amazon.com/images/M/MV5BN2JmNGFiNTctYmIyYi00NGU4LWI2OWYtMjNkODQzYjJmZjgzXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg 600w, https://m.media-amazon.com/images/M/MV5BN2JmNGFiNTctYmIyYi00NGU4LWI2OWYtMjNkODQzYjJmZjgzXkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg 1024w, https://m.media-amazon.com/images/M/MV5BN2JmNGFiNTctYmIyYi00NGU4LWI2OWYtMjNkODQzYjJmZjgzXkEyXkFqcGc@._V1_FMjpg_UX1100_.jpg 1100w, https://m.media-amazon.com/images/M/MV5BN2JmNGFiNTctYmIyYi00NGU4LWI2OWYtMjNkODQzYjJmZjgzXkEyXkFqcGc@._V1_FMjpg_UX1100_.jpg 1100w",
      id: "top35",
      year: 2002,
      imdbid: "tt0253474",
      imdb_link: "https://www.imdb.com/title/tt0253474",
    },
    {
      rank: 53,
      title: "Alien",
      description:
        "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
      genre: ["Horror", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.5",
      id: "top53",
      year: 1979,
      imdbid: "tt0078748",
      imdb_link: "https://www.imdb.com/title/tt0078748",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDczOTQ2OGItYWVmOS00YTJmLWI0NWItYzhkMmMyODI0ZWE3XkEyXkFqcGc@._V1_.jpg",
      srcset:
        "https://m.media-amazon.com/images/M/MV5BMDczOTQ2OGItYWVmOS00YTJmLWI0NWItYzhkMmMyODI0ZWE3XkEyXkFqcGc@._V1_FMjpg_UX320_.jpg 320w, https://m.media-amazon.com/images/M/MV5BMDczOTQ2OGItYWVmOS00YTJmLWI0NWItYzhkMmMyODI0ZWE3XkEyXkFqcGc@._V1_FMjpg_UX480_.jpg 480w, https://m.media-amazon.com/images/M/MV5BMDczOTQ2OGItYWVmOS00YTJmLWI0NWItYzhkMmMyODI0ZWE3XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg 600w, https://m.media-amazon.com/images/M/MV5BMDczOTQ2OGItYWVmOS00YTJmLWI0NWItYzhkMmMyODI0ZWE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg 1000w, https://m.media-amazon.com/images/M/MV5BMDczOTQ2OGItYWVmOS00YTJmLWI0NWItYzhkMmMyODI0ZWE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg 1000w",
    },
  ];

  return (
    <Box component="section">
      <InfiniteCarousel timeToChange={5}>
        {movies.map((movie) => (
          <HeroMovieItem key={"hero-movie" + movie.id} movie={movie} />
        ))}
      </InfiniteCarousel>
    </Box>
  );
}
