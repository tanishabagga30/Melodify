import { Link } from 'react-router-dom';
import Card from '../Album/Card';

const Albums = ({ url, title, albums }) => (
  <section className='container flex flex-column flex-gap'>
    <div className='flex flex-space-between flex-v-center'>
      <Link to={url} className='active-opacity underline'>
        <h2>{title}</h2>
      </Link>
    </div>
    <div className='album-grid'> 
      {albums.map((item) => (
        <Card key={item.id} album={item} />
      ))}
    </div>
  </section>
);

export default Albums;
