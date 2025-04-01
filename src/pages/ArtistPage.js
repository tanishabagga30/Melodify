import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import useTrack from '../hooks/useTrack';
import Song from '../components/Song/Song';
import Albums from '../components/Artist/Albums';
import Header from '../components/Artist/Header';
import Comments from './components/Comments/Comments';  
import albumData from '../data/albumData.json';
import { auth } from '../firebase'; // Import Firebase auth

const ArtistPage = () => {
    const { currentState, currentTrack } = useTrack();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Check if a user is logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    // Handle Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
            navigate("/"); // Redirect to home page
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <div>
            {/* Fixed Header for Login/Signup or Logout */}
            <div className="auth-buttons">
                {user ? (
                    <button className="auth-btn logout-btn" onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="auth-btn login-btn">Login</Link>
                        <Link to="/signup" className="auth-btn signup-btn">Sign Up</Link>
                    </>
                )}
            </div>

            {/* Main Artist Page Content */}
            <div className="artist flex flex-column flex-gap no-select">
                <Header artist={albumData[0].artist} />

                <section className="container flex flex-column flex-gap">
                    <div className="flex flex-space-between flex-v-center">
                        <Link to="/" className="active-opacity underline">
                            <h2>Songs</h2>
                        </Link>
                    </div>
                    <div className="flex flex-column">
                        {albumData.map((album) =>
                            album.tracks.map((track, index) => (
                                <Song
                                    key={`${album.id}-${track.id}`}
                                    album={album}
                                    track={track}
                                    playing={currentState === 'playing' && currentTrack?.id === track.id}
                                />
                            ))
                        )}
                    </div>
                </section>

                <Albums url={`/albums/${albumData[0].artist.id}`} title="Albums" albums={albumData} />
                <Albums url={`/albums/${albumData[0].artist.id}`} title="Featured on" albums={albumData} />

                {/* Comments Section */}
                <Comments /> {/* This is where the Comments component is used */}
            </div>
        </div>
    );
};

export default ArtistPage;
