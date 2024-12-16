import { useEffect, useState } from "react";
import { SongTrack } from "../models/SongTrack";
import { MusicPlayerContext } from "../contexts/music-player.context";
import { MusicPlayer } from "../components/MusicPlayer";

export const MusicPlayerProvider = () => {
  const [$audio, set$audio] = useState(new Audio());
  const [tracks, setTracks] = useState<SongTrack[]>([]);
  const [currentSong, setCurrentSong] = useState<SongTrack | null>(
    tracks[0] ?? null
  );

  useEffect(() => {
    const handleUpdateCurrentTime = () => {
      if ($audio.currentTime === undefined) return;
      window.dispatchEvent(
        new CustomEvent<number>("@app/song-currentTime", {
          detail: $audio.currentTime,
        })
      );
    };
    const handleUpdateDuration = () => {
      if ($audio.duration === undefined) return;
      window.dispatchEvent(
        // @app/song-currentTime
        // @app/song-currentDuration
        new CustomEvent<number>("@app/song-currentDuration", {
          detail: $audio.duration,
        })
      );
    };

    const handleIsPlayingMetaPlayer = (value: boolean) => {
      const playerMetaEvent = new CustomEvent("@app/song-is-playing", {
        detail: value,
      });
      window.dispatchEvent(playerMetaEvent);
    };
    const handleIsEndMetaPlayer = () => {
      handleIsPlayingMetaPlayer(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setTracks(([_firstTrack, ...v]) => {
        return v;
      });
    };
    const handleIsPlayPlayer = () => handleIsPlayingMetaPlayer(true);

    $audio.addEventListener("timeupdate", handleUpdateCurrentTime);
    $audio.addEventListener("durationchange", handleUpdateDuration);
    $audio.addEventListener("play", handleIsPlayPlayer);
    $audio.addEventListener("pause", handleIsEndMetaPlayer);
    $audio.addEventListener("ended", handleIsEndMetaPlayer);
    return () => {
      $audio.removeEventListener("timeupdate", handleUpdateCurrentTime);
      $audio.removeEventListener("timeupdate", handleUpdateDuration);
      $audio.removeEventListener("play", handleIsPlayPlayer);
      $audio.removeEventListener("pause", handleIsEndMetaPlayer);
      $audio.removeEventListener("ended", handleIsEndMetaPlayer);
    };
  }, [$audio]);

  useEffect(() => {
    const handlerAddSong = (e: Event) => {
      const custom: CustomEvent<SongTrack> = e as CustomEvent;
      const song = custom.detail;
      const firstTrack = tracks[0];
      if (firstTrack?.id === song.id) return;
      setTracks((v) => v.concat(song));
    };

    window.addEventListener("@app/add-song", handlerAddSong);
    set$audio((value) => {
      const firstTrack = tracks[0];
      if ((value.src && value.ended) || !value.src) {
        value.pause();
        value.remove();
        if (firstTrack) {
          setCurrentSong(firstTrack);
        }
        if (firstTrack?.preview_url) value.src = firstTrack?.preview_url;
        value.autoplay = true;
      }
      return value;
    });
    return () => {
      window.removeEventListener("@app/add-song", handlerAddSong);
    };
  }, [tracks]);

  const addToPlayerTrack = (song: SongTrack) => {
    window.dispatchEvent(new CustomEvent("@app/add-song", { detail: song }));
  };
  const stop = () => {
    $audio.pause();
  };
  const play = async () => {
    await $audio.play();
  };

  /**
   *
   * @param volume [0-1]
   */
  const changeVolume = (volume: number) => {
    $audio.volume = volume;
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        addToPlayerTrack,
        play,
        stop,
        changeVolume,
        tracks,
        currentSong,
      }}
    >
      <MusicPlayer />
    </MusicPlayerContext.Provider>
  );
};
