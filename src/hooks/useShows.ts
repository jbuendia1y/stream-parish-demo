import { useQuery } from "@tanstack/react-query";
import { getShowsData } from "../services/shows-data";

export function useShows() {
  const query = useQuery({
    queryKey: ["shows"],
    queryFn: () => getShowsData({}),
  });

  return query;
}
