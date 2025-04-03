import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import useTrack from '../hooks/useTrack';
import Song from '../components/Song/Song';
import Albums from '../components/Artist/Albums';
import Header from '../components/Artist/Header';
import albumData from '../data/albumData.json';

const ArtistPage = () => {
    const { currentState, currentTrack } = useTrack();
    const [user, setUser] = useState(null);
    const [showWelcome, setShowWelcome] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                // Extract name from email
                const extractedName = extractNameFromEmail(currentUser.email);
                setUsername(extractedName);

                // Show welcome message for 5 sec
                setShowWelcome(true);
                setTimeout(() => {
                    setShowWelcome(false);
                }, 4000);
            }
        });

        return () => unsubscribe();
    }, []);

    const extractNameFromEmail = (email) => {
        const namePart = email.split('@')[0]; // Get part before '@'
        return namePart
            .replace(/[\.\_\-]/g, " ") // Replace dots, underscores, and hyphens with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letters
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            {showWelcome && user ? (
                // Welcome message (Visible for 5 sec)
                <div className="welcome-message">
                    <h2>Welcome, {username}! </h2>
                </div>
            ) : (
                <>
                    {/* Authentication buttons */}
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
                                    album.tracks.map((track) => (
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
                    </div>
                </>
            )}
        </div>
    );
};

export default ArtistPage;
