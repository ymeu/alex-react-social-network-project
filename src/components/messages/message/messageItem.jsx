import React from 'react';
import classes from './../messages.module.css';


const MessageItem = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

export default MessageItem;

