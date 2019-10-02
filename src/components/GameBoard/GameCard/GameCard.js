import React from 'react';

import classes from './GameCard.module.css';

const gameCard = ( props ) => (
    <div 
        className={classes.gameCard}
        style={{backgroundColor: props.color}} >

    </div>
);

export default gameCard;