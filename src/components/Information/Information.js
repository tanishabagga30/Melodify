// components
import Image from './Image';
import Details from './Details';
import Buttons from './Buttons';
import Playlist from './Playlist';

const Information = ({ album }) => (
  <div className='information flex flex-column flex-gap no-select'>
    <Image album={album} />
    <Details album={album} />
    <Buttons album={album} />
    <Playlist album={album} />
  </div>
);

export default Information;
