import React from 'react';
import classes from './messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const MessageItem = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Messages = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name='Alexey' id='1' />
                <DialogItem name='Natalie' id='2' />
                <DialogItem name='Boris' id='3' />
                <DialogItem name='Anna' id='4' />
                <DialogItem name='Tanya' id='5' />
            </div>
            <div className={classes.messages}>
                <MessageItem message='Hey, how are you?' />
                <MessageItem message='Are you coming today?' />
                <MessageItem message='Can you send me the documents we talked about pls? I will need them tomorrow' />
            </div>
        </div>
    )
}

export default Messages;

