import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';


import Calculator from './Calcualtor';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token');  // Check if user is logged in

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/nav"
                    element={isAuthenticated ? <Calculator/> : <Calcualtor to="/login" />}
                />
            </Routes>
        </Router>
    );
};

export default App;
