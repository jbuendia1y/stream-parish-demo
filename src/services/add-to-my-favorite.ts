import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAt,
} from "firebase/firestore";
import { db } from "../libs/firebase";
import { Movie } from "../models/Movie";
import { SongTrack } from "../models/SongTrack";
import { TvShow } from "../models/TvShow";

export const addMultimediaToMyFavorites = async (
  userId: string,
  data: {
    type: "movie" | "tv-show" | "song";
    payload: Movie | SongTrack | TvShow;
  }
) => {
  await addDoc(collection(db, "user-favorites", userId), {
    ...data,
    createdAt: serverTimestamp(),
  });
};

interface Options {
  favoriteType?: "movie" | "tv-show" | "song";
  page?: number;
  pageSize?: number;
}

const isUserMultimediaFavorite = (userId: string, multimediaId: string) => {
  const collRef = collection(db, "user-favorites", userId);
  query();
};

export const getUserFavorites = async (userId: string, options: Options) => {
  const { page = 1, pageSize = 20 } = options;
  const collRef = collection(db, "user-favorites", userId);
  const q = query(
    collRef,
    orderBy("createdAt"),
    startAt((page - 1) * pageSize),
    limit(pageSize)
  );

  const result = await getDocs(q);
  return result.docs.map((snapshot) =>
    snapshot.data({ serverTimestamps: "estimate" })
  );
};
