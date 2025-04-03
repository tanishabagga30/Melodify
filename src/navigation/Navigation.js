import { Routes, Route } from 'react-router-dom';
import AlbumPage from '../pages/AlbumPage';
import ArtistPage from '../pages/ArtistPage';
import AlbumsPage from '../pages/AlbumsPage';
import LoginPage from '../components/auth/loginPage';
import SignupPage from '../components/auth/signupPage';


const Navigation = () => (
    <Routes>
        <Route path="/" element={<ArtistPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/albums/:id" element={<AlbumsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
    </Routes>
);

export default Navigation;