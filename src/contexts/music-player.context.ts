/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import { SongTrack } from "../models/SongTrack";

export interface MusicPlayerCtxType {
  addToPlayerTrack: (song: SongTrack) => void;
  play: () => Promise<void>;
  stop: () => void;
  /**
   *
   * @param volume [0-1] range
   * @returns
   */
  changeVolume: (volume: number) => void;
  tracks: Array<SongTrack>;
  currentSong: SongTrack | null;
}

export const MusicPlayerContext = createContext<MusicPlayerCtxType>({
  addToPlayerTrack: function (song: SongTrack): void {
    window.dispatchEvent(new CustomEvent("@app/add-song", { detail: song }));
  },
  play: function (): Promise<void> {
    return Promise.reject(new Error("Function not implemented."));
  },
  stop: function (): void {
    throw new Error("Function not implemented.");
  },
  changeVolume: function (_: number): void {
    throw new Error("Function not implemented.");
  },
  tracks: [],
  currentSong: null,
});
