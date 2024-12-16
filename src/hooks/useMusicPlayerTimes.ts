import { useWindowEvent } from "./useWindowEvent";

export const useMusicPlayerTimes = () => {
  const { payload: currentDuration } = useWindowEvent<number>(
    "@app/song-currentDuration",
    {
      defaultValue: 0,
    }
  );
  const { payload: currentTime } = useWindowEvent<number>(
    "@app/song-currentTime",
    {
      defaultValue: 0,
    }
  );
  return { currentDuration, currentTime };
};
