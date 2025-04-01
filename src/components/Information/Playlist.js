// hooks
import useTrack from '../../hooks/useTrack';

// components
import TrackLine from './TrackLine';

const Playlist = ({ album }) => {
  const { currentState, currentTrack, handlePlayPause } = useTrack();

  return (
    <section className='playlist'>
      {album.tracks?.map((item) => (
        <TrackLine
          track={item}
          key={item.id}
          selected={currentTrack?.id === item.id}
          handlePlayPause={() => handlePlayPause(item, album)}
          playing={currentTrack?.id === item.id && currentState === 'playing'}
        />
      ))}
    </section>
  );
};

export default Playlist;
