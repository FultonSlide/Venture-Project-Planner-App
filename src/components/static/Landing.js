import React from 'react';
import { NavLink } from 'react-router-dom';
import Bulb from '../../Venture-landing-bg.svg';
import Shape from '../../Rectangle_6.svg';

const Landing = () => {
    return (
        <div className="landing container">
            <div className="row">
                <div className="left-col col s12 m6">
                    <div className="landing-bar"></div>
                    <h1 className="landing-title">Plan the projects of tomorrow</h1>
                    <div className="landing-content-wrapper">
                        <p className="landing-content">Venture is a free project planning service that allows you to plan the big moments so you can enjoy the little ones.</p>
                        <p className="landing-content">Whether it's that long overdue bathroom re-model or an important company project, Venture has you covered with the latest in project planning solutions. Sign up today and get started!</p>
                    </div>
                    <div className="landing-btn-wrapper">
                        <NavLink to="/signup"><button className="landing-btn">Sign Up</button></NavLink>
                        <NavLink to="/signin"><button className="landing-btn-unfocused">Login</button></NavLink>
                    </div>
                </div>
                <div className="right-col col s12 m6">
                    
                </div>
            </div>
            <div className="landing-bg-wrapper">
                <img src={Shape} alt="background" className="landing-bg"/>
                <img src={Bulb} alt="ideas" className="landing-img"/>
            </div>
        </div>
    )
};

export default Landing;