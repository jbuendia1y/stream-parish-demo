import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/music-player.context";

export const useMusicPlayer = () => {
  const ctx = useContext(MusicPlayerContext);
  return ctx;
};
