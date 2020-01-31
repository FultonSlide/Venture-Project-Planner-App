import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div className="backdrop-app" onClick={props.drawerClickHandler}></div>
    )
}

export default Backdrop;