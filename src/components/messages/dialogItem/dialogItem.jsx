import React from 'react';
import classes from './../messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    return (
        <div className={classes.dialog}>
            <NavLink to={'/profile/:userId?'}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;

