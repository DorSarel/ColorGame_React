import React from 'react';

import classes from './Header.module.css';

const header = ( props ) => {

    let headlineColor = <h1>Loading Color...</h1>;

    if (props.pickedColor) {
        headlineColor = <h1>RGB: ({props.pickedColor.red}, {props.pickedColor.green}, {props.pickedColor.blue})</h1>;
    }

    return (
        <header className={classes.header}>
            <h3>The Great</h3>
            {headlineColor}
            <h3>Color Game</h3>
        </header>
    )
};

export default header;