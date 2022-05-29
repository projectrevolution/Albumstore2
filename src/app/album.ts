import { Track } from './tracks';

export interface Album {
  artist: string;
  album: {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
  };
}
