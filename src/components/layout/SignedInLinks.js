import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create" className="grey-text text-darken-2">New Project</NavLink></li>
            <li><a onClick={props.signOut} className="grey-text text-darken-2">Logout</a></li>
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