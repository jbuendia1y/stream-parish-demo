import { Box, Container, Paper, Skeleton } from "@mui/material";
import { useMovies } from "../../hooks/useMovies";
import { SearchInput } from "../../components/SearchInput";
import { useSearchParams } from "react-router-dom";
import { MovieItem } from "./components/MovieItem";
import { AppLayout } from "../../components/AppLayout";

export function AppMovies() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useMovies({
    search: searchParams.get("q") ?? undefined,
    page: parseInt(searchParams.get("page") ?? "1"),
  });

  return (
    <AppLayout>
      <Paper component="main" sx={{ boxSizing: "border-box", paddingY: 5 }}>
        <Container>
          <Box marginBottom={5} sx={{ boxSizing: "border-box" }}>
            <SearchInput fullWidth />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, 250px)",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {isLoading ? (
              <Skeleton sx={{ width: "250px", minHeight: "300px" }}></Skeleton>
            ) : null}
            {data?.map((v) => (
              <MovieItem movie={v} key={"movie-search-list-item-" + v.imdbid} />
            ))}
          </Box>
        </Container>
      </Paper>
    </AppLayout>
  );
}
