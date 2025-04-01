import { useContext } from 'react';

// contexts
import TrackContext from '../contexts/TrackContext';

const useTrack = () => {
  return useContext(TrackContext);
};

export default useTrack;
