import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import GameControls from '../../components/GameControls/GameControls';
import GameBoard from '../../components/GameBoard/GameBoard';

import classes from './GamePanel.module.css';

class GamePanel extends Component {
    state = {
        pickedRandomcolor: null,
        levels: {
            easy: {
                numOfCards: 4,
                maxNumOfAttempts: 3
            },
            meduim: {
                numOfCards: 8,
                maxNumOfAttempts: 5
            },
            hard: {
                numOfCards: 12,
                maxNumOfAttempts: 7
            }
        },
        selectedLevel: 'meduim',
        isPlaying: true,
        disableGame: false,
        colors: [],
        numOfAttempts: 0
    }

    componentDidMount() {
        this.startGameHandler();
    }

    generateRandomColors = (optionalLevel) => {
        let numOfCards = 0;
        console.log(optionalLevel);
        if (!optionalLevel) {
            numOfCards = this.state.levels[this.state.selectedLevel].numOfCards;
        } else {
            numOfCards = this.state.levels[optionalLevel].numOfCards;
        }
        const randomColors = [];
        
        let color;
        for (let idx = 0; idx < numOfCards; ++idx) {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            color = { red, green, blue };
            randomColors.push(color);
        }

        const pickedColor = this.pickRandomColor(randomColors);
        this.setState({ 
            colors: randomColors,
            pickedRandomcolor: pickedColor,
            isPlaying: true
         });
    }

    pickRandomColor = (randomColors) => {
        const randomIdx = Math.floor(Math.random() * randomColors.length);
        return randomColors[randomIdx];
    }

    startGameHandler = (level = null) => {
        this.setState({
            numOfAttempts: 0,
            disableGame: false
        });
        this.generateRandomColors(level);
    }

    setGameLevelHandler = (level) => {
        this.setState({ selectedLevel: level });
        this.startGameHandler(level);
    }

    checkPickedColorHandler = (colorFromCard, e) => {

        let currentNumOfAttemtps = this.state.numOfAttempts;
        ++currentNumOfAttemtps;
        this.setState({ numOfAttempts: currentNumOfAttemtps });

        if (currentNumOfAttemtps >= this.state.levels[this.state.selectedLevel].maxNumOfAttempts) {
            this.setState({ 
                disableGame: true,
                isPlaying: false
            });
        }

        if (colorFromCard === this.state.pickedRandomcolor) {
            const oneColorArr = [];
            for (let idx = 0; idx < this.state.colors.length; ++idx) {
                oneColorArr.push(this.state.pickedRandomcolor);
            }

            this.setState({ 
                isPlaying: false,
                colors: oneColorArr,
            });
        } else {
            // Is this the correct way???
            e.target.style.backgroundColor = "#232323";
            e.target.style.cursor = "default";
        }
    }

    render() {
        return (
            <div className={classes.gamePanel}>
                <Header pickedColor={this.state.pickedRandomcolor} />
                <GameControls
                    gameLevels={this.state.levels}
                    isGameOn={this.state.isPlaying}
                    startGame={this.startGameHandler}
                    setLevel={this.setGameLevelHandler}
                    currentLevel={this.state.selectedLevel}
                    userAttempts={this.state.numOfAttempts} />
                <main className={classes.gameBoard}>
                    <GameBoard 
                        numOfCards={this.state.levels[this.state.selectedLevel].numOfCards}
                        cardsColors={this.state.colors}
                        checkCard={this.checkPickedColorHandler}
                        shouldDisable={this.state.disableGame} />
                </main>
            </div>
        );
    }
}

export default GamePanel;