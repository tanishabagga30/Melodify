import { Link } from 'react-router-dom';

const Card = ({ album }) => (
  <Link key={album.id} to={`/album/${album.id}`} className='card active-opacity'>
    <div className='card-image' style={{ backgroundImage: `url(${album.image})` }} />
    <div className='card-info flex flex-column flex-gap-small'>
      <strong>{album.name}</strong>
      <div className='flex flex-gap-small flex-h-center flex-v-center'>
        <span>
          {album.year} - {album.songs} songs
        </span>
      </div>
    </div>
  </Link>
);

export default Card;
