import React, { Component } from 'react';
import './BurgerMenu.css';

class BurgerMenu extends Component{
    render() {
        return(
            <div className="burger-menu right" onClick={this.props.drawerClickHandler}>
                <div className={this.props.sideDrawerActive ? "burger-top-active burger-top" : "burger-top"}></div>
                <div className={this.props.sideDrawerActive ? "burger-mid-active burger-mid" : "burger-mid"}></div>
                <div className={this.props.sideDrawerActive ? "burger-bottom-active burger-bottom" : "burger-bottom"}></div>
            </div>
        )
    }
}

export default BurgerMenu;
