import { useQuery } from "@tanstack/react-query";
import { getMoviesData } from "../services/movies-data";

interface Options {
  search?: string;
  limit?: number;
  page?: number;
}

export const useMovies = (options: Options = {}) => {
  const { page = 1, limit = 20 } = options;

  const query = useQuery({
    queryKey: ["movies", options.page, options.search],
    queryFn: async () => {
      return await getMoviesData({ ...options, page, limit });
    },
  });
  return query;
};
