import React from 'react';
import GameCard from './GameCard/GameCard';

import classes from './GameBoard.module.css';

const gameBoard = ( props ) => {

    let cards = [];
    if (props.cardsColors.length !== 0) {
        for (let idx = 0; idx < props.cardsColors.length; ++idx) {
            let rgb = `rgb(${props.cardsColors[idx].red}, ${props.cardsColors[idx].green}, ${props.cardsColors[idx].blue})`;
            cards.push(
                <GameCard 
                    color={rgb} 
                    key={idx}
                    clicked={(e) => props.checkCard(props.cardsColors[idx], e)}
                    shouldDisable={props.shouldDisable} />
            )
        }
    }

    return (
        <div className={classes.board}>
            {cards}
        </div>
    );
}

export default gameBoard;