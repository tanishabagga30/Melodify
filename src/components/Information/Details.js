import { Link } from 'react-router-dom';

const Details = ({ album }) => (
  <section className='album flex flex-column flex-gap-small flex-h-center flex-v-center'>
    <h1>
      <Link to={`/artist/${album?.artist.id}`} className='active-opacity'>
        {album.artist.name}
      </Link>
    </h1>
    <h2>{album.name}</h2>
    <div className='album-info flex flex-gap-small flex-v-center'>
      
      <em>
        {album.year} - {album.songs} Songs - {album.minutes} Minutes
      </em>
    </div>
  </section>
);

export default Details;
