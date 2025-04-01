import Card from '../components/Album/Card';
import Search from '../components/Search/Search';
import albumData from '../data/albumData.json';
const AlbumsPage = () => (
  <div className="albums flex flex-column flex-gap no-select">
    <div className="container flex flex-column">
      <Search />
      <section className="flex flex-column flex-gap">
        <div className="flex flex-space-between flex-v-center">
          <h3>Top Albums</h3>
        </div>
        <div className="grid flex-gap">
          {albumData.map((item) => (
            <Card key={item.id} album={item} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default AlbumsPage;
