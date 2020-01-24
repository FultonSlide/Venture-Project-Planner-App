import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create" className="grey-text text-darken-2">New Project</NavLink></li>
            <li><NavLink to="/" className="grey-text text-darken-2">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating">WQ</NavLink></li>
        </ul>
    )
};

export default SignedInLinks;