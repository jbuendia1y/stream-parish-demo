import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import { SongTrack } from "../models/SongTrack";
import { db } from "../libs/firebase";

interface Options {
  search?: string;
  page?: number;
  limit?: number;
}

export const getSongsData = async (options: Options) => {
  const page = options.page ?? 1;
  const q = query(
    collection(db, "songs"),
    orderBy("orderField"),
    startAt((page - 1) * (options.limit ?? 20)),
    limit(options.limit ?? 20)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => d.data()) as SongTrack[];
};
