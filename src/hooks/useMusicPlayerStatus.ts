import { useWindowEvent } from "./useWindowEvent";

export const useMusicPlayerConfig = () => {
  const { payload: isPlaying } = useWindowEvent("@app/song-is-playing", {
    defaultValue: false,
  });

  return { isPlaying };
};
