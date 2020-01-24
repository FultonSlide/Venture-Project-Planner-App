import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signup" className="grey-text text-darken-2">Sign Up</NavLink></li>
            <li><NavLink to="/signin" className="grey-text text-darken-2">Login</NavLink></li>
        </ul>
    )
};

export default SignedOutLinks;