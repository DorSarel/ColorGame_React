import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import GameControls from '../../components/GameControls/GameControls';

import classes from './GamePanel.module.css';

class GamePanel extends Component {

    state = {
        pickedRandomcolor: {
            red: '255',
            green: '255',
            blue: '255'
        },
        isPlaying: true
    }

    render() {
        return (
            <div className={classes.gamePanel}>
                <Header pickedColor={this.state.pickedRandomcolor} />
                <GameControls />
                <main className={classes.gameBoard}>
                    
                </main>
            </div>
        );
    }
}

export default GamePanel;