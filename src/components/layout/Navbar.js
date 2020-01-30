import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Venture from '../../VentureLogo.svg';
import { connect } from 'react-redux';

class Navbar extends Component {
    render(){
        const { auth, profile } = this.props;
        const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
        return (
            <nav className="venture-nav">
                <div className="container">
                    <Link to='/'><img src={Venture} className="venture-logo" alt="Venture"></img></Link>
                    {auth.isLoaded && links}
                </div>
            </nav>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);