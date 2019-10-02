import React from 'react';

import classes from './GameControls.module.css';

const gameControls = ( props ) => {

    return (
        <div className={classes.gameControls}>
            <div className={classes.gameControls__flex}>
                <div>
                    <button>New Colors</button>
                </div>

                <div>
                    <button>Easy</button>
                    <button>Meduim</button>
                    <button>Hard</button>
                </div>
            </div>
        </div>
    );
}

export default gameControls;