import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Login from "../scenes/auth/login";
import Dashboard from "../scenes/logged/dashboard";
import Devices from "../scenes/logged/devices";

const Navigation = () => (
    <Router>
        <Routes>
            <Route
                path="/login"
                element={<Login/>}
            />
            <Route
                path="/dashboard"
                element={<Dashboard/>}
            />
            <Route
                path="/devices"
                element={<Devices/>}
            />
        </Routes>
    </Router>
);

export default Navigation;
