import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

function Nav(){
    return (
       <div className='nav-bar'> 
            <p>AVAHAN</p>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/Games">Games</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
       </div>
    )
}

export default Nav;