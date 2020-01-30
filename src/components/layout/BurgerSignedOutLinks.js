import React from 'react';
import { NavLink } from 'react-router-dom';

const BurgerSignedOutLinks = (props) => {
    return (
        <ul className="right burger-nav">
            <li><NavLink to="/" className="venture-link">About</NavLink></li>
            <li><NavLink to="/" className="venture-link">Contact</NavLink></li>
            <li><NavLink to="/signin" className="venture-link">Login</NavLink></li>
            <li><button className="sign-up-btn"><NavLink to="/signup" className="white-text sign-up-anchor">Sign Up</NavLink></button></li>
        </ul>
    )
};

export default BurgerSignedOutLinks;