export interface Movie {
  rank: number;
  title: string;
  description: string;
  coverImage: string;
  image: string;
  big_image: string;
  genre: Array<string>;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  imdbid: string;
  imdb_link: string;
}

export interface MovieCast {
  adult: boolean;
  gender: 2;
  id: 13848;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string; // /eZAynbZFJB4L8ZfMXTUSG3RmBcg.jpg
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
