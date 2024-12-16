import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import { FaPause, FaPlay } from "react-icons/fa";
import { useMusicPlayer } from "../../../hooks/useMusicPlayer";
import { useMusicPlayerTimes } from "../../../hooks/useMusicPlayerTimes";
import { useMusicPlayerConfig } from "../../../hooks/useMusicPlayerStatus";

const formatDisplayTime = (value: number) => {
  if (Number.isNaN(value)) return `0:0`;
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
};

export const MusicPlayerControls = () => {
  const { stop: stopMusic, play: playCurrentSong } = useMusicPlayer();
  const { isPlaying } = useMusicPlayerConfig();
  const { currentDuration, currentTime } = useMusicPlayerTimes();

  const handleStop = () => {
    stopMusic();
  };

  const handlePlay = () => {
    playCurrentSong();
  };

  const handleClick = () => {
    if (isPlaying) handleStop();
    else handlePlay();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "200px",
      }}
    >
      <IconButton size="medium" onClick={handleClick}>
        {isPlaying ? (
          <FaPause size="40px" fill="#fff" />
        ) : (
          <FaPlay size="40px" fill="#fff" />
        )}
      </IconButton>
      <Slider
        size="medium"
        min={0}
        step={1}
        color="info"
        value={(currentTime / currentDuration) * 100}
        // onChange={(_e, value) => {}}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Typography variant="caption" component="p">
          {formatDisplayTime(parseFloat(currentTime.toFixed(0)))}
        </Typography>
        <Typography variant="caption" component="p">
          {formatDisplayTime(
            parseFloat((currentDuration - currentTime).toFixed(0))
          )}
        </Typography>
      </Stack>
    </Box>
  );
};
