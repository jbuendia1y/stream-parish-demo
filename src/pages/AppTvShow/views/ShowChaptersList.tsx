import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { TvShow } from "../../../models/TvShow";
import { ShowChapterItem } from "../components/ShowChapterItem";
import { getShowEpisodes } from "../../../services/shows-data";

export const ShowChaptersList = ({ show }: { show?: TvShow }) => {
  const { data: chapters, isLoading } = useQuery({
    queryKey: ["tv-show", "chapters", show?.id],
    queryFn: async () => {
      if (!show?.id) return null;
      if (show.seasons === 0) return null;
      return await getShowEpisodes(show.id, 1).then((res) =>
        res.sort((a, b) => a.number - b.number)
      );
    },
    enabled: !!show,
  });

  return (
    <Stack
      component="section"
      spacing={2}
      sx={{ maxWidth: "90%", marginX: "auto" }}
    >
      {!isLoading && chapters
        ? chapters.map((chapter) => (
            <ShowChapterItem
              key={
                "show-chapter-" +
                show?.id +
                "-" +
                chapter.number +
                "-" +
                chapter.season
              }
              show={show}
              chapter={{
                image: chapter.image.medium,
                chapterNumber: chapter.number,
                duration: `${chapter.duration}min`,
                title: chapter.name ?? "Episode title",
              }}
            />
          ))
        : Array.from({ length: 5 }, (_, idx) => idx).map((idx) => (
            <Skeleton
              width={"100%"}
              variant="rectangular"
              key={"show-chapters-list-episode-item-loading-" + idx}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "max-content 1fr",
                  gap: 2,
                }}
              >
                <Box></Box>
                <Box sx={{ paddingY: 2 }}>
                  <Typography component="h3" variant="h6">
                    1. Loading title
                  </Typography>
                  <Typography variant="body2">Loading duration</Typography>
                </Box>
              </Box>
            </Skeleton>
          ))}
    </Stack>
  );
};
