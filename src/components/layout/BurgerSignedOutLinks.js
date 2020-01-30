import React from 'react';
import { NavLink } from 'react-router-dom';

const BurgerSignedOutLinks = (props) => {
    return (
        <ul className={props.sideDrawerActive ? "burger-nav-active right burger-nav" : "right burger-nav"} onClick={props.drawerClickHandler}>
            <li className="burger-link"><NavLink to="/">About</NavLink></li>
            <li className="burger-link"><NavLink to="/">Contact</NavLink></li>
            <li className="burger-link"><NavLink to="/signin">Login</NavLink></li>
            <li className="sign-up-button"><button className="sign-up-btn"><NavLink to='/signup' className="white-text sign-up-anchor">Sign Up</NavLink></button></li>
        </ul>
    )
};

export default BurgerSignedOutLinks;