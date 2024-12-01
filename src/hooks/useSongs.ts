import { useQuery } from "@tanstack/react-query";
import { getSongsData } from "../services/songs-data";

export function useSongs() {
  const query = useQuery({
    queryKey: ["songs"],
    queryFn: () => getSongsData({}),
  });

  return query;
}
