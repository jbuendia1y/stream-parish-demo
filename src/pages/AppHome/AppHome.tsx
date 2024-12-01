import { AppHeroMovies, RecommendedMovies } from "./views";
import { AppLayout } from "../../components/AppLayout";
import { RecommendedSongs } from "./views/RecommendedSongs";
import { RecommendedShows } from "./views/RecommendedShows";

export function AppHome() {
  return (
    <AppLayout>
      <AppHeroMovies />
      <RecommendedMovies />
      <RecommendedSongs />
      <RecommendedShows />
    </AppLayout>
  );
}
