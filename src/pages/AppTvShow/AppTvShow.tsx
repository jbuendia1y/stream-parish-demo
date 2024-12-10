import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { AppLayout } from "../../components/AppLayout";
import {
  Box,
  Button,
  Container,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { getShowData } from "../../services/shows-data";
import { FaPlay, FaStar } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { ShowChaptersList } from "./views/ShowChaptersList";
import { ShowGenresList } from "./views/ShowGenresList";
import { ShowCastList } from "./views/ShowCastList";

// https://m.media-amazon.com/images/M/MV5BNTEyMDBiZDgtNzIxNy00ZmUwLWFmNzItZjdiOTg2ZTVhYTQ0XkEyXkFqcGc@._V1_.jpg
// https://m.media-amazon.com/images/M/MV5BNTEyMDBiZDgtNzIxNy00ZmUwLWFmNzItZjdiOTg2ZTVhYTQ0XkEyXkFqcGc@._V1_FMjpg_UX320_.jpg 320w, https://m.media-amazon.com/images/M/MV5BNTEyMDBiZDgtNzIxNy00ZmUwLWFmNzItZjdiOTg2ZTVhYTQ0XkEyXkFqcGc@._V1_FMjpg_UX480_.jpg 480w, https://m.media-amazon.com/images/M/MV5BNTEyMDBiZDgtNzIxNy00ZmUwLWFmNzItZjdiOTg2ZTVhYTQ0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg 600w, https://m.media-amazon.com/images/M/MV5BNTEyMDBiZDgtNzIxNy00ZmUwLWFmNzItZjdiOTg2ZTVhYTQ0XkEyXkFqcGc@._V1_FMjpg_UX1024_.jpg 1024w, https://m.media-amazon.com/images/M/MV5BNTEyMDBiZDgtNzIxNy00ZmUwLWFmNzItZjdiOTg2ZTVhYTQ0XkEyXkFqcGc@._V1_FMjpg_UX1280_.jpg 1280w, https://m.media-amazon.com/images/M/MV5BNTEyMDBiZDgtNzIxNy00ZmUwLWFmNzItZjdiOTg2ZTVhYTQ0XkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg 2160w

export const AppTvShow = () => {
  const { showId } = useParams();
  const { data: show, isLoading } = useQuery({
    queryKey: ["shows", showId],
    queryFn: () => {
      if (!showId) return Promise.resolve(undefined);
      return getShowData(showId);
    },
    enabled: !!showId,
  });

  return (
    <AppLayout>
      <Box position="relative">
        <Box
          {...(!isLoading
            ? {
                component: "img",
                src: show?.coverImage.url,
                alt: show?.title,
              }
            : {
                component: Skeleton,
              })}
          sx={{
            display: ["none", "block"],
            width: "100%",
            minHeight: 200,
            maxHeight: 335,
            objectFit: "cover",
            aspectRatio: "16/9",
            backgroundColor: (theme) => theme.palette.info.dark,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient( 360deg, rgba(0, 0, 0, 0.6) 0%, rgba(217, 217, 217, 0) 100% )",
          }}
        ></Box>
      </Box>
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: 5,
          paddingY: 5,
        }}
      >
        <Stack
          component="header"
          direction={["column", "row"]}
          sx={{ maxWidth: "90%", marginX: "auto", gap: 7 }}
        >
          <Box sx={{ maxHeight: 300 }}>
            {isLoading ? (
              <Skeleton
                height={400}
                sx={{
                  width: ["auto", 300],
                  transform: ["none", "translateY(-100px)"],
                }}
              />
            ) : (
              <Box
                component="img"
                src={show?.image.url}
                alt={show?.title}
                sx={{
                  aspectRatio: "9/16",
                  objectFit: "cover",
                  height: ["auto", 400],
                  width: ["100%", 300],
                  maxHeight: [300, "unset"],
                  borderRadius: 2,
                  transform: ["none", "translateY(-100px)"],
                }}
              />
            )}
          </Box>
          <Stack spacing={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component="h1" variant="h4" fontWeight="bold">
                {show?.title}
              </Typography>
              <Typography
                fontSize={25}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaStar />
                {show?.ratingsSummary.aggregateRating}
              </Typography>
            </Stack>
            <Typography
              component="p"
              variant="body1"
              sx={{ textWrap: "pretty" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              sequi pariatur eius iusto ullam adipisci tempora nobis maiores
              distinctio! Enim quod, culpa sit aperiam quisquam nostrum
              molestiae iure repellendus et!
            </Typography>
            <ShowGenresList show={show ?? undefined} />
            <Stack direction="row" spacing={2}>
              <Button
                startIcon={<FaPlay />}
                variant="contained"
                color="secondary"
                size="small"
              >
                Play
              </Button>
              <IconButton
                size="small"
                aria-label="add to my list"
                sx={{
                  borderColor: (theme) => theme.palette.grey.A700,
                  color: "#fff",
                }}
              >
                <IoIosAddCircleOutline size="20px" fill="#fff" />
              </IconButton>
              <IconButton
                size="small"
                aria-label="like"
                sx={{
                  borderColor: (theme) => theme.palette.grey.A700,
                  color: "#fff",
                }}
              >
                <SlLike size="20px" fill="#fff" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Typography
          variant="h5"
          fontWeight="bold"
          component="h2"
          sx={{ maxWidth: "90%", marginX: "auto", marginY: 2 }}
        >
          Episodios
        </Typography>
        <ShowChaptersList show={show ?? undefined} />
        <ShowCastList show={show ?? undefined} />
      </Container>
    </AppLayout>
  );
};
