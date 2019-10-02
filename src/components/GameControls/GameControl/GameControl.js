import React from 'react';

import classes from './GameControl.module.css';

const gameControl = ( props ) => {
    
    let classesToUse = [classes.gameControl];
    if (props.isSelected) {
        classesToUse.push(classes.selected);
    }
    
    return (
        <button 
            className={classesToUse.join(' ')}
            onClick={props.clicked} >
            {props.children}
        </button>
    );
};

export default gameControl;