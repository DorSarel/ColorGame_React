import React from 'react';

import classes from './GameCard.module.css';

const gameCard = ( props ) => {
    
    let clickCallBack = props.clicked;
    if (props.shouldDisable) {
        clickCallBack = null;
    }

    return (
        <div 
            className={classes.gameCard}
            style={{backgroundColor: props.color}}
            onClick={clickCallBack} >

        </div>
    )
};

export default gameCard;