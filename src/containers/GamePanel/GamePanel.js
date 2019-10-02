import React, { Component } from 'react';
import classes from './GamePanel.module.css';
class GamePanel extends Component {

    state = {
        pickedRandomcolor: {
            red: '255',
            green: '255',
            blue: '255'
        }
    }

    render() {
        return (
            <div className={classes.gamePanel}>
                <header>
                    <h1>Game Title</h1>
                    <h3>Random Color</h3>
                </header>

                <div>
                    <ul>
                        <li>Button 1</li>
                        <li>Button 2</li>
                        <li>Button 3</li>
                        <li>Button 4</li>
                    </ul>
                </div>

                <main>
                    <p>A Number of cards</p>
                </main>
            </div>
        );
    }
}

export default GamePanel;