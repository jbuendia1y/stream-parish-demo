export interface TvShow {
  id: string;
  isAdult: boolean;
  title: string;
  description: string;
  seasons: number;
  totalEpisodes: number;
  genres: string[];
  coverImage: {
    id: number;
    url: string;
    width: number;
    height: number;
  };
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

export interface TvShowActor {
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    birthday: string;
    deathday: null;
    gender: string;
    image: string | null;
  };
  character: {
    id: number;
    url: string;
    name: string;
    image: string | null;
  };
}

export interface TvShowEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  duration: number; //minutes
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
