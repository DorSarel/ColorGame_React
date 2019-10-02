import React from 'react';
import GameCard from './GameCard/GameCard';

import classes from './GameBoard.module.css';

const gameBoard = ( props ) => {

    return (
        <div className={classes.board}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
        </div>
    );
}

export default gameBoard;