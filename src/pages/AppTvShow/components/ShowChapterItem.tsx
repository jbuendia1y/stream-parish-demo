import { Box, IconButton, Paper, Typography } from "@mui/material";
import { TvShow } from "../../../models/TvShow";
import { FaPlay } from "react-icons/fa";

export const ShowChapterItem = (props: {
  show?: TvShow;
  chapter: {
    image: string;
    chapterNumber: number;
    title: string;
    duration: string;
  };
}) => {
  const { show, chapter } = props;
  return (
    <Box
      component={Paper}
      key={"show" + show?.id + "episode" + chapter.chapterNumber}
      sx={{
        display: "grid",
        gridTemplateColumns: "max-content 1fr max-content",
        gap: 2,
        paddingRight: 4,
      }}
    >
      <Box
        height="100%"
        width="150px"
        component="img"
        src={chapter.image}
        alt={chapter.title}
        loading="lazy"
        sx={{
          objectFit: "fill",
          backgroundColor: (theme) => theme.palette.info.dark,
        }}
      />
      <Box sx={{ paddingY: 2 }}>
        <Typography component="h3" variant="h6">
          {chapter.chapterNumber}. {chapter.title}
        </Typography>
        <Typography variant="body2">{chapter.duration}</Typography>
      </Box>
      <IconButton color="secondary">
        <FaPlay color="white" />
      </IconButton>
    </Box>
  );
};
