import { useQuery } from "@tanstack/react-query";
import { TvShow } from "../models/TvShow";

export function useShows() {
  const query = useQuery({
    queryKey: ["shows"],
    queryFn: () =>
      import("../data/shows.json").then((m) => {
        const data = m.default.slice(0, 20);
        const parsed: Array<TvShow> = data.map((v) => ({
          id: v.title.id,
          image: {
            id: v.title.primaryImage.id,
            height: v.title.primaryImage.imageHeight,
            width: v.title.primaryImage.imageWidth,
            url: v.title.primaryImage.imageUrl,
          },
          isAdult: v.title.isAdult,
          ratingsSummary: v.title.ratingsSummary,
          releaseYear: v.title.releaseYear,
          title: v.title.originalTitleText.text,
        }));
        return parsed;
      }),
  });

  return query;
}
