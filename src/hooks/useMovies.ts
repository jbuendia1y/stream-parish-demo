import { Movie } from "../models/Movie";
import { useQuery } from "@tanstack/react-query";

interface Options {
  search?: string;
  limit?: number;
  page?: number;
}

export const useMovies = (options: Options = {}) => {
  const { page = 1, limit = 20 } = options;

  const query = useQuery({
    queryKey: ["movies", options.page, options.search],
    queryFn: () =>
      import("../data/movies.json").then((v) => {
        const startAt = (page - 1) * limit;
        const endAt = page * limit;

        if (options.search) {
          const search = options.search?.toLocaleLowerCase() ?? "";
          return v.default
            .filter(
              (v) =>
                v.title.toLocaleLowerCase().includes(search) ||
                v.description.toLocaleLowerCase().includes(search)
            )
            .slice(startAt, endAt);
        }
        return v.default.slice(startAt, endAt);
      }) as Promise<Movie[]>,
  });
  return query;
};
