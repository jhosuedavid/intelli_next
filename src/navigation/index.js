import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "../scenes/auth/login";
import Register from "../scenes/auth/register";

const Navigation = () => (
    <Router>
        <Routes>
            <Route
                path="/login"
                element={<Login/>}
            />
            <Route path="/register"
                   element={<Register/>}
            />
        </Routes>
    </Router>
);

export default Navigation;
