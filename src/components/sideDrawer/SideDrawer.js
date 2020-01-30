import React, { Component } from 'react';
import BurgerSignedInLinks from '../layout/BurgerSignedInLinks';
import BurgerSignedOutLinks from '../layout/BurgerSignedOutLinks';
import { connect } from 'react-redux';
import './SideDrawer.css';

class SideDrawer extends Component {
    render(){
        const { auth, profile } = this.props;
        const links = auth.uid ? <BurgerSignedInLinks profile={profile} sideDrawerActive={this.props.sideDrawerActive} drawerClickHandler={this.props.drawerClickHandler}/> : <BurgerSignedOutLinks sideDrawerActive={this.props.sideDrawerActive} drawerClickHandler={this.props.drawerClickHandler}/>;
        return(
            <div className={this.props.sideDrawerActive ? "side-drawer side-drawer-active" : "side-drawer"}>
                {auth.isLoaded && links}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(SideDrawer);