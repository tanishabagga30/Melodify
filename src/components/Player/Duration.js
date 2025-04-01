// hooks
import useTrack from '../../hooks/useTrack';

// utils
import { formatTime } from '../../utils/toolbox';

function Duration() {
  const { trackDuration, currentProgress } = useTrack();

  return (
    <div className='player-duration flex flex-gap-medium flex-v-center'>
      <span>{formatTime(currentProgress)}</span>
      <em>/</em>
      <span>{formatTime(trackDuration)}</span>
    </div>
  );
}

export default Duration;
