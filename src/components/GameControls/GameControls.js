import React from 'react';
import GameControl from './GameControl/GameControl';

import classes from './GameControls.module.css';

const gameControls = ( props ) => {

    return (
        <div className={classes.gameControls}>
            <div className={classes.gameControls__flex}>
                <div>
                    <GameControl>New Colors</GameControl>
                </div>

                <div>
                    <GameControl>Easy</GameControl>
                    <GameControl>Meduim</GameControl>
                    <GameControl>Hard</GameControl>
                </div>
            </div>
        </div>
    );
}

export default gameControls;