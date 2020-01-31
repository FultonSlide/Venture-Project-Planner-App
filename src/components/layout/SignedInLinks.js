import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
            <ul className="right navbar">
                <li><NavLink to="/dashboard" className="venture-link">Dashboard</NavLink></li>
                {/* <li><NavLink to="/" className="venture-link">About</NavLink></li>
                <li><NavLink to="/" className="venture-link">Contact</NavLink></li> */}
                <li><NavLink to="/create" className="venture-link">New Project</NavLink></li>
                <li><a onClick={props.signOut} className="venture-link">Logout</a></li>
                <li><NavLink to="/" className="btn btn-floating z-depth-0">{props.profile.initials}</NavLink></li>
            </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);