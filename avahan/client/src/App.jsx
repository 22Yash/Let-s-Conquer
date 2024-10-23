import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/nav"
import Home from "./components/home"
import AboutUs from "./components/AboutUs"
import Games from "./components/Games"
import Register from "./components/register"

function App() {
  return (
      <Router>
        <div>
          <Nav></Nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Games" element={<Games />}></Route>
          <Route path="/register" element={<Register />} />
        </Routes>
        </div>
      </Router>
  );
}
export default App;
