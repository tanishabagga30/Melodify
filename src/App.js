import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/auth/signupPage"; // Corrected path
import LoginPage from "./components/auth/loginPage"; // Corrected path
import ArtistPage from "./pages/ArtistPage"; // Ensure this file exists

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ArtistPage />} /> {/* Home route */}
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
