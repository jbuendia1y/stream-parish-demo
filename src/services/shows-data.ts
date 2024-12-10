import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "../libs/firebase";
import { TvShow, TvShowActor, TvShowEpisode } from "../models/TvShow";

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
    const coverImage = docData.coverImage.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (v: any) => v.type === "background"
    );

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
      description: docData.description,
      seasons: docData.seasons,
      totalEpisodes: docData.totalEpisodes,
      genres: docData.genres,
      coverImage: {
        id: coverImage.id,
        width: coverImage.resolutions.width,
        height: coverImage.resolutions.height,
        url: coverImage.resolutions.url,
      },
    };

    return data;
  });
};

export const getShowData = async (showId: string): Promise<TvShow | null> => {
  const docRef = doc(db, "shows", showId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;

  const docData = snapshot.data();
  const coverImages = docData.coverImage.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v: any) => v.type === "background"
  );
  const coverImage = coverImages[coverImages.length - 1];

  const data: TvShow = {
    id: docData.id,
    coverImage: {
      id: coverImage.id,
      width: coverImage.resolutions.original.width,
      height: coverImage.resolutions.original.height,
      url: coverImage.resolutions.original.url,
    },
    image: {
      id: docData.primaryImage.id,
      height: docData.primaryImage.imageHeight,
      width: docData.primaryImage.imageWidth,
      url: docData.primaryImage.imageUrl,
    },
    description: docData.description,
    genres: docData.genres,
    seasons: docData.seasons,
    totalEpisodes: docData.totalEpisodes,
    isAdult: docData.isAdult,
    ratingsSummary: docData.ratingsSummary,
    releaseYear: docData.releaseYear,
    title: docData.originalTitleText.text,
  };
  return data;
};

export const getShowActors = async (
  showId: string
): Promise<Array<TvShowActor>> => {
  const collRef = collection(db, "shows", showId, "actors");
  const result = await getDocs(query(collRef, limit(20)));
  return result.docs.map((snapshot) => {
    const docData = snapshot.data();
    const data: TvShowActor = {
      person: {
        id: docData.person.id,
        url: docData.person.url,
        image: docData.person.image ? docData.person.image.medium : null,
        birthday: docData.person.birthday,
        country: docData.person.country,
        deathday: docData.person.deathday,
        gender: docData.person.gender,
        name: docData.person.name,
      },
      character: {
        id: docData.character.id,
        image: docData.character.image ? docData.character.image.medium : null,
        name: docData.character.name,
        url: docData.character.url,
      },
    };
    return data;
  });
};

export const getShowEpisodes = async (
  showId: string,
  season: number
): Promise<Array<TvShowEpisode>> => {
  const collRef = collection(db, "shows", showId, "episodes");
  const q = query(collRef, where("season", "==", season));
  const result = await getDocs(q);
  return result.docs.map((snapshot) => {
    const { runtime: duration, ...docData } = snapshot.data();
    const data: TvShowEpisode = {
      id: docData.id,
      airdate: docData.airdate,
      airstamp: docData.airstamp,
      airtime: docData.airtime,
      image: docData.image,
      name: docData.name,
      number: docData.number,
      season: docData.season,
      rating: docData.rating,
      summary: docData.summary,
      duration,
    };
    return data;
  });
};
