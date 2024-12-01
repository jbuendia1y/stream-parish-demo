export interface SongTrack {
  id: string;
  name: string;
  disc_number: number;
  track_number: number;
  duration_ms: number;
  preview_url: string;
  popularity: number;

  external_urls: {
    spotify: string;
  };

  album: {
    name: string;
    images: Array<{
      height: number;
      width: number;
      url: string;
    }>;
    release_date: string;
    total_tracks: number;
  };

  artists: Array<{
    external_urls: {
      spotify: string;
    };
    id: string;
    name: string;
  }>;
}
