import React from 'react';
import GameControl from './GameControl/GameControl';

import classes from './GameControls.module.css';

const gameControls = ( props ) => {

    const levelsControls = Object.keys(props.gameLevels).map(lvlKey => {
        return <GameControl 
                    key={lvlKey}
                    clicked={() => props.setLevel(lvlKey)}
                    isSelected={props.currentLevel === lvlKey} >
                    {lvlKey.toUpperCase()}
                </GameControl>
    });

    const resetBtnTxt = props.isGameOn ? 'new colors' : 'reset';

    return (
        <div className={classes.gameControls}>
            <div className={classes.gameControls__flex}>
                <div>
                    <GameControl clicked={props.startGame}>
                        {resetBtnTxt.toUpperCase()}
                    </GameControl>
                </div>

                <div>
                    {levelsControls}
                </div>
            </div>
        </div>
    );
}

export default gameControls;