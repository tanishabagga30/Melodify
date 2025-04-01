import { useRef, useState, useEffect } from 'react';

// contexts
import TrackContext from '../contexts/TrackContext';

const TrackProvider = ({ children }) => {
  const audioRef = useRef(null);

  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [lastVolume, setLastVolume] = useState(0.5);
  const [trackDuration, setTrackDuration] = useState(0);
  const [prevTrack, setPrevTrack] = useState(null);
  const [nextTrack, setNextTrack] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentState, setCurrentState] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  useEffect(() => {
    if (currentAlbum?.tracks) {
      const currentIndex = currentAlbum.tracks.findIndex((track) => track.id === currentTrack?.id);

      const prevIndex = currentIndex - 1;
      const nextIndex = currentIndex + 1;

      setPrevTrack(currentAlbum.tracks[prevIndex] || null);
      setNextTrack(currentAlbum.tracks[nextIndex] || null);

      setTrackDuration(0);
      setCurrentProgress(0);
    }
  }, [currentAlbum, currentTrack?.id]);

  const addItem = (track, album) => {
    setCurrentTrack(track);
    setCurrentAlbum(album);
  };

  const changeState = (state) => {
    setCurrentState(state);
  };

  const handlePlay = () => {
    const audioElement = audioRef?.current;
    const audioPromise = audioElement?.play();

    audioPromise?.then(null).catch(() => {
      
    });
  };

  useEffect(() => {
    const audioElement = audioRef?.current;

    audioElement?.addEventListener('loadeddata', handlePlay);

    return () => {
      audioElement?.removeEventListener('loadeddata', handlePlay);
    };
  }, [currentTrack]);

  const handlePlayPause = (track, album) => {
    const audioElement = audioRef?.current;

    if (currentTrack?.id !== track.id) {
      addItem(track, album);
      audioElement?.load();
    } else if (currentState === 'playing') {
      audioElement?.pause();
    } else {
      handlePlay();
    }
  };

  const handleOnEnded = () => {
    if (nextTrack && currentAlbum) {
      handlePlayPause(nextTrack, currentAlbum);
    } else {
      setCurrentProgress(0);
    }
  };

  const handleOnLoadedMetaData = () => {
    if (audioRef?.current) {
      setTrackDuration(audioRef.current.duration);
    }
  };

  const handleOnCanPlay = (e) => {
    e.currentTarget.volume = volume;
  };

  const handleVolumeChange = (volumeValue) => {
    if (audioRef?.current) {
      setVolume(volumeValue);
      const audioElement = audioRef.current;
      audioElement.volume = volumeValue;

      if (volumeValue === 0) {
        setMuted(true);
        setLastVolume(0.1);
      }
    }
  };

  const handleMuteChange = () => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;

      if (muted) {
        setMuted(false);
        setVolume(lastVolume);
        audioElement.volume = lastVolume;
      } else {
        setLastVolume(audioElement.volume);
        setVolume(0);
        setMuted(true);
        audioElement.volume = 0;
      }
    }
  };

  const handleProgressChange = (e) => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;
      setCurrentProgress(e.currentTarget.valueAsNumber);
      audioElement.currentTime = e.currentTarget.valueAsNumber;
    }
  };

  const providerValue = {
    muted,
    volume,
    audioRef,
    prevTrack,
    nextTrack,
    currentState,
    currentTrack,
    currentAlbum,
    trackDuration,
    currentProgress,
    addItem,
    changeState,
    handlePlayPause,
    handleMuteChange,
    handleVolumeChange,
    handleProgressChange,
  };

  return (
    <TrackContext.Provider value={providerValue}>
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={handleOnEnded}
        onCanPlay={handleOnCanPlay}
        onPause={() => changeState('paused')}
        onPlaying={() => changeState('playing')}
        onLoadedMetadata={handleOnLoadedMetaData}
        onDurationChange={(e) => setTrackDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentProgress(e.currentTarget.currentTime)}
      >
        <track kind="captions" />
        <source type="audio/mpeg" src={currentTrack?.mediaurl} />
        Your browser does not support the audio tag.
      </audio>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackProvider;
