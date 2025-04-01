import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ArtistPage from "./pages/ArtistPage"; // Import ArtistPage
import LoginPage from "./components/auth/loginPage"; // Import LoginPage
import SignupPage from "./components/auth/signupPage"; // Import SignupPage
import Comments from './components/Comments/Comments';  // Adjusted to match casing
 // Import Comments (if you plan to use it directly in App.js)

function App() {
    return (
        <Router>
            <Routes>
                {/* Define routes for different pages */}
                <Route path="/artist" element={<ArtistPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                
               
                { <Route path="/comments" element={<Comments />} /> }
            </Routes>
        </Router>
    );
}

export default App;
