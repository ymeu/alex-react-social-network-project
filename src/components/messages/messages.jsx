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
   
    let dialogsData = [ 
        {id: '1', name: 'Alexey'},
        {id: '2', name: 'Natalie'},
        {id: '3', name: 'Boris'},
        {id: '4', name: 'Anna'},
        {id: '5', name: 'Tanya'}
        ];

    let messagesData = [ 
            {id: '1', message: 'Hey, how are you?'},
            {id: '2', message: 'Are you coming today?'},
            {id: '3', message: 'Can you send me the documents we talked about pls? I will need them tomorrow'},
            ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <MessageItem message= {messagesData[0].message} />
                <MessageItem message= {messagesData[1].message} />
                <MessageItem message= {messagesData[2].message} />
            </div>
        </div>
    )
}

export default Messages;

