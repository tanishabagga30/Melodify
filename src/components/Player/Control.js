
import useTrack from '../../hooks/useTrack';

const Control = () => {
  const { prevTrack, nextTrack, currentState, currentTrack, currentAlbum, handlePlayPause } =
    useTrack();

  if (currentTrack && currentAlbum) {
    return (
      <>
        <button
          type='button'
          title={`Previous song: ${prevTrack ? prevTrack.name : 'N/A'}`}
          className={prevTrack ? 'active-opacity' : 'disabled active-opacity'}
          onClick={() => prevTrack && handlePlayPause(prevTrack, currentAlbum)}
        >
          <span className='material-symbols-outlined'>skip_previous</span>
        </button>
        <button
          type='button'
          className='big active-opacity'
          onClick={() => handlePlayPause(currentTrack, currentAlbum)}
        >
          <span className='material-symbols-outlined'>
            {currentState === 'playing' ? 'pause' : 'play_arrow'}
          </span>
        </button>
        <button
          type='button'
          title={`Next song: ${nextTrack ? nextTrack.name : 'N/A'}`}
          className={nextTrack ? 'active-opacity' : 'disabled active-opacity'}
          onClick={() => nextTrack && handlePlayPause(nextTrack, currentAlbum)}
        >
          <span className='material-symbols-outlined'>skip_next</span>
        </button>
      </>
    );
  }

  return null;
};

export default Control;
