import {
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useMusicPlayer } from "../../hooks/useMusicPlayer";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { MusicPlayerVolume } from "./components/MusicPlayerVolume";
import { MusicPlayerControls } from "./components/MusicPlayerControls";
import { InfiniteTextPreview } from "../InfiniteTextPreview/InfiniteTextPreview";
import { useMusicPlayerTimes } from "../../hooks/useMusicPlayerTimes";

export const MusicPlayer = () => {
  const { currentSong, stop: stopMusic } = useMusicPlayer();

  const { currentDuration, currentTime } = useMusicPlayerTimes();

  if (!currentSong) return <></>;
  return (
    <Paper
      component="section"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "10px",
          backgroundColor: (theme) => theme.palette.primary.dark,
          ":before": {
            position: "absolute",
            content: '""',
            width:
              currentTime === 0
                ? "0%"
                : `${(currentTime / currentDuration) * 100}%`,
            height: "10px",
            top: 0,
            left: 0,
            backgroundColor: (theme) => theme.palette.info.main,
          },
        }}
      ></Box>
      <Container maxWidth="lg" sx={{ paddingY: 1 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component="img"
              src={currentSong.album.images[0].url}
              alt={currentSong.album.name}
              sx={{ width: 100, height: 100 }}
            />
            <Box sx={{ width: "150px", overflow: "hidden" }}>
              <InfiniteTextPreview
                component="h2"
                variant="h6"
                fontWeight="bold"
                sx={{
                  width: "100%",
                  textWrap: "nowrap",
                }}
              >
                {currentSong.name}
              </InfiniteTextPreview>
              <Typography
                component="p"
                variant="subtitle1"
                sx={{
                  maxWidth: "100%",
                  textWrap: "nowrap",
                }}
              >
                {currentSong.artists[0].name}
              </Typography>
            </Box>
            <Box>
              <IconButton
                size="medium"
                aria-label="add to my list"
                sx={{
                  borderColor: (theme) => theme.palette.grey.A700,
                  color: "#fff",
                }}
              >
                <IoIosAddCircleOutline size="30px" fill="#fff" />
              </IconButton>
            </Box>
          </Stack>
          <MusicPlayerControls />
          <Stack direction="row" spacing={1}>
            <MusicPlayerVolume />
            <IconButton size="medium" onChange={() => stopMusic}>
              <MdCancel size="30px" fill="#fff" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
};
