import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import ArtistPage from "./pages/ArtistPage";
import LoginPage from "./components/auth/loginPage";
import SignupPage from "./components/auth/signupPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
                <Route path="/artist" element={<ArtistPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
}

export default App;
