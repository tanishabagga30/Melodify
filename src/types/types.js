export const IArtist = {
  id: "",
  name: "",
  image: "",
  description: "",
  monthlyListeners: "",
};

export const ITrack = {
  id: "",
  no: 0,
  name: "",
  duration: "",
  mediaurl: "",
  explicit: false,
  playcount: "",
};

export const IAlbum = {
  id: "",
  year: 0,
  name: "",
  songs: 0,
  image: "",
  minutes: 0,
  artist: {},
  explicit: false,
  tracks: null,
};

export const ITrackContext = {
  muted: false,
  volume: 1,
  audioRef: null,
  prevTrack: null,
  nextTrack: null,
  currentState: null,
  currentTrack: null,
  currentAlbum: null,
  trackDuration: 0,
  currentProgress: 0,
  addItem: (track, album) => {},
  changeState: (state) => {},
  handlePlayPause: (track, album) => {},
  handleMuteChange: () => {},
  handleVolumeChange: (volumeValue) => {},
  handleProgressChange: (e) => {},
};
