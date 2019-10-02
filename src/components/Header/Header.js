import React from 'react';

import classes from './Header.module.css';

const header = ( props ) => (
    <header className={classes.header}>
        <h3>The Great</h3>
        <h1>RGB: ({props.pickedColor.red}, {props.pickedColor.green}, {props.pickedColor.blue})</h1>
        <h3>Color Game</h3>
    </header>
);

export default header;