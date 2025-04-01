import { createContext } from 'react';

const TrackContext = createContext({
  muted: false,
  volume: 0.5,
  audioRef: null,
  prevTrack: null,
  nextTrack: null,
  currentState: null,
  currentTrack: null,
  currentAlbum: null,
  trackDuration: 0,
  currentProgress: 0,
  addItem: () => {},
  changeState: () => {},
  handlePlayPause: () => {},
  handleMuteChange: () => {},
  handleVolumeChange: () => {},
  handleProgressChange: () => {},
});

export default TrackContext;
