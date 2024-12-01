import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import { db } from "../libs/firebase";
import { TvShow } from "../models/TvShow";

interface Options {
  search?: string;
  page?: number;
  limit?: number;
}

export const getShowsData = async (options: Options) => {
  const page = options.page ?? 1;
  const q = query(
    collection(db, "shows"),
    orderBy("orderField"),
    startAt((page - 1) * (options.limit ?? 20)),
    limit(options.limit ?? 20)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => {
    const docData = d.data();
    const data: TvShow = {
      id: docData.id,
      image: {
        id: docData.primaryImage.id,
        height: docData.primaryImage.imageHeight,
        width: docData.primaryImage.imageWidth,
        url: docData.primaryImage.imageUrl,
      },
      isAdult: docData.isAdult,
      ratingsSummary: docData.ratingsSummary,
      releaseYear: docData.releaseYear,
      title: docData.originalTitleText.text,
    };

    return data;
  });
};
