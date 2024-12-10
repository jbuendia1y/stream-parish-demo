import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "../libs/firebase";
import { Movie, MovieCast } from "../models/Movie";

interface Options {
  search?: string;
  page?: number;
  limit?: number;
}

export const getMoviesData = async (options: Options) => {
  const constraints: QueryConstraint[] = [];

  if (options.search) {
    constraints.push(
      where("title", ">=", options.search),
      where("title", "<", options.search + "z")
    );
  }
  const page = options.page ?? 1;
  const q = query(
    collection(db, "movies"),
    orderBy("orderField"),
    startAt((page - 1) * (options.limit ?? 20)),
    limit(options.limit ?? 20),
    ...constraints
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((d) => d.data()) as Movie[];
  return data;
};

export const getMovieData = async (movieId: string): Promise<Movie | null> => {
  const docRef = doc(db, "movies", movieId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return snapshot.data() as Movie;
};

export const getMovieActors = async (movieId: string): Promise<MovieCast[]> => {
  const collRef = collection(db, "movies", movieId, "cast");
  // Directing Acting
  const q = query(
    collRef,
    where("known_for_department", "==", "Acting"),
    limit(20)
  );
  const result = await getDocs(q);
  return result.docs.map((snapshot) => {
    const docData = snapshot.data();
    const data: MovieCast = {
      adult: docData.adult,
      cast_id: docData.cast_id,
      character: docData.character,
      credit_id: docData.credit_id,
      gender: docData.gender,
      id: docData.id,
      known_for_department: docData.known_for_department,
      name: docData.name,
      order: docData.order,
      original_name: docData.original_name,
      popularity: docData.popularity,
      profile_path: docData.profile_path,
    };
    return data;
  });
};
