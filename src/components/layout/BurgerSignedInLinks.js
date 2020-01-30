import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const BurgerSignedInLinks = (props) => {
    return (
        <ul className={props.active ? "burger-nav-active right burger-nav" : "right burger-nav"}>
            <li><NavLink to="/dashboard" className={props.active ? "burger-link-active burger-link" : "burger-link"}>Dashboard</NavLink></li>
            <li><NavLink to="/" className={props.active ? "burger-link-active burger-link" : "burger-link"}>About</NavLink></li>
            <li><NavLink to="/" className={props.active ? "burger-link-active burger-link" : "burger-link"}>Contact</NavLink></li>
            <li><NavLink to="/create" className={props.active ? "burger-link-active burger-link" : "burger-link"}>New Project</NavLink></li>
            <li><a onClick={props.signOut} className={props.active ? "burger-link-active burger-link" : "burger-link"}>Logout</a></li>
            <li><NavLink to="/" className={props.active ? "burger-link-active initials-active btn btn-floating z-depth-0" : "btn btn-floating z-depth-0"}>{props.profile.initials}</NavLink></li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(BurgerSignedInLinks);