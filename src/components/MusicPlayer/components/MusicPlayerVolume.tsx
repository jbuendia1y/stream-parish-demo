import { Slider, Stack } from "@mui/material";
import { useState } from "react";
import { FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { useMusicPlayer } from "../../../hooks/useMusicPlayer";

export const MusicPlayerVolume = () => {
  const { changeVolume } = useMusicPlayer();
  const [volume, setVolume] = useState(50);
  return (
    <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
      <FaVolumeDown size="20px" fill="#fff" />
      <Slider
        aria-label="Volume"
        value={volume}
        color="info"
        onChange={(_e, value) => {
          if (Array.isArray(value)) return;
          setVolume(value);
          changeVolume(value / 100);
        }}
        sx={{ minWidth: 100 }}
      />
      <FaVolumeUp size="30px" fill="#fff" />
    </Stack>
  );
};
