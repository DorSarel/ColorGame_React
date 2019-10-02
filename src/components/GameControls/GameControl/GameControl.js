import React from 'react';

import classes from './GameControl.module.css';

const gameControl = ( props ) => (
    <button 
        className={classes.gameControl}
        onClick={props.clicked} >
        {props.children}
    </button>
);

export default gameControl;