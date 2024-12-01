import { useQuery } from "@tanstack/react-query";
import { SongTrack } from "../models/SongTrack";

export function useSongs() {
  const query = useQuery({
    queryKey: ["songs"],
    queryFn: () =>
      import("../data/songs.json").then((m) =>
        m.default.slice(0, 20)
      ) as Promise<SongTrack[]>,
  });

  return query;
}
