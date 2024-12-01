export interface TvShow {
  id: string;
  isAdult: boolean;
  title: string;
  image: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
  ratingsSummary: {
    aggregateRating: number;
    topRanking: { rank: number } | null;
    voteCount: number;
  };
  releaseYear: { year: number; endYear: number | null };
}
