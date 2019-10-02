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
                numOfCards: 4
            },
            meduim: {
                numOfCards: 8
            },
            hard: {
                numOfCards: 12
            }
        },
        selectedLevel: 'meduim',
        isPlaying: true,
        colors: []
    }

    componentDidMount() {
        this.startGameHandler();
    }

    generateRandomColors = (optionalLevel) => {
        let numOfCards = 0;
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

    startGameHandler = () => {
        this.generateRandomColors();
    }

    setGameLevelHandler = (level) => {
        this.setState({ selectedLevel: level });
        this.generateRandomColors(level);
    }

    checkPickedColorHandler = (colorFromCard, e) => {
        if (colorFromCard === this.state.pickedRandomcolor) {
            const oneColorArr = [];
            for (let idx = 0; idx < this.state.colors.length; ++idx) {
                oneColorArr.push(this.state.pickedRandomcolor);
            }

            this.setState({ 
                isPlaying: false,
                colors: oneColorArr
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
                    currentLevel={this.state.selectedLevel} />
                <main className={classes.gameBoard}>
                    <GameBoard 
                        numOfCards={this.state.levels[this.state.selectedLevel].numOfCards}
                        cardsColors={this.state.colors}
                        checkCard={this.checkPickedColorHandler} />
                </main>
            </div>
        );
    }
}

export default GamePanel;