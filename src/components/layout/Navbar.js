import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Venture from '../../VentureLogo.svg';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return (
        <nav className="nav-wrapper z-depth-0">
            <div className="container">
                <Link to='/' className="brand-logo grey-text text-darken-2"><img src={Venture} className="venture-logo"></img></Link>
                {auth.isLoaded && links}
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);