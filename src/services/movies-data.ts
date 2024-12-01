import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "../libs/firebase";
import { Movie } from "../models/Movie";

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
