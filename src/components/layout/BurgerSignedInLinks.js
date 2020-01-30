import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const BurgerSignedInLinks = (props) => {
    return (
        <ul className={props.sideDrawerActive ? "burger-nav-active right burger-nav" : "right burger-nav"} onClick={props.drawerClickHandler}>
            <li className="burger-link"><NavLink to="/dashboard" >Dashboard</NavLink></li>
            <li className="burger-link"><NavLink to="/">About</NavLink></li>
            <li className="burger-link"><NavLink to="/">Contact</NavLink></li>
            <li className="burger-link"><NavLink to="/create">New Project</NavLink></li>
            <li className="burger-link"><a onClick={props.signOut}>Logout</a></li>
            <li className="initials-button"><NavLink to="/" className="btn btn-floating z-depth-0">{props.profile.initials}</NavLink></li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(BurgerSignedInLinks);