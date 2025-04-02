import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Melodify!</h1>
            <p>This is the home page.</p>
            <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
        </div>
    );
};

export default HomePage;
