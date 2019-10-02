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
        levels: {
            easy: {
                numOfCards: 3
            },
            meduim: {
                numOfCards: 6
            },
            hard: {
                numOfCards: 9
            }
        },
        isPlaying: true
    }

    render() {
        return (
            <div className={classes.gamePanel}>
                <Header pickedColor={this.state.pickedRandomcolor} />
                <GameControls 
                    gameLevels={this.state.levels}
                    isGameOn={this.state.isPlaying} />
                <main className={classes.gameBoard}>
                    
                </main>
            </div>
        );
    }
}

export default GamePanel;