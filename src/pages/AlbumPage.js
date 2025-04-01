import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cover from '../components/Cover/Cover';
import Search from '../components/Search/Search';
import Information from '../components/Information/Information';
import albumData from '../data/albumData.json';
const AlbumPage = () => {
  const { id } = useParams();
  const [currentAlbumData, setCurrentAlbumData] = useState(null);

  useEffect(() => {
    const currentAlbum = albumData.find((album) => album.id === id);
    if (currentAlbum) {
      setCurrentAlbumData(currentAlbum);
    }
  }, [id]);

  if (!currentAlbumData) {
    return <div>Album not found</div>;
  }

  return (
    <Cover image={currentAlbumData.image}>
      <Search />
      <Information album={currentAlbumData} />
    </Cover>
  );
};

export default AlbumPage;
