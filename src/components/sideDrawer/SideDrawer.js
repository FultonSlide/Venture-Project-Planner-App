import React, { Component } from 'react';
import BurgerSignedInLinks from '../layout/BurgerSignedInLinks';
import BurgerSignedOutLinks from '../layout/BurgerSignedOutLinks';
import { connect } from 'react-redux';
import './SideDrawer.css';

class SideDrawer extends Component {
    state = {
        active: false
    }

    toggleClass = () => {
        this.setState((prevState) => {
            return {active: !prevState.active}
        });
    }

    render(){
        const { auth, profile } = this.props;
        const links = auth.uid ? <BurgerSignedInLinks profile={profile} active={this.state.active}/> : <BurgerSignedOutLinks active={this.state.active}/>;
        return(
            <div className={this.state.active ? "container side-drawer side-drawer-active" : "container side-drawer"}>
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