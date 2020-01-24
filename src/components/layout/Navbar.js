import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Venture from '../../VentureLogo.svg';

const Navbar = () => {
    return (
        <nav className="nav-wrapper z-depth-0">
            <div className="container">
                <Link to='/' className="brand-logo grey-text text-darken-2"><img src={Venture} className="venture-logo"></img></Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
};

export default Navbar;