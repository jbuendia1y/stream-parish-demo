const TMDB_BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/";
const TMDB_IMAGES_SIZES = [
  { forUrl: "w300", inMediaQuery: "300w" },
  { forUrl: "w780", inMediaQuery: "780w" },
  { forUrl: "w1280", inMediaQuery: "1280w" },
];

/**
 * Get response image for img element
 * @param imagePath
 * @returns
 */
export const getTmdbResponsiveImage = (imagePath: string) => {
  return {
    src: TMDB_BASE_IMAGE_PATH + "original" + imagePath,
    srcSet: TMDB_IMAGES_SIZES.map(
      (v) => TMDB_BASE_IMAGE_PATH + v.forUrl + imagePath + " " + v.inMediaQuery
    ).join(", "),
  };
};
