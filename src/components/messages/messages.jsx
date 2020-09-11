import React from 'react';
import classes from './messages.module.css';
import DialogItem from './dialogItem/dialogItem';
import MessageItem from './message/messageItem';


const Messages = (props) => {

    let dialogs = [
        { id: '1', name: 'Alexey' },
        { id: '2', name: 'Natalie' },
        { id: '3', name: 'Boris' },
        { id: '4', name: 'Anna' },
        { id: '5', name: 'Tanya' }
    ];

    let messages = [
        { id: '1', message: 'Hey, how are you?' },
        { id: '2', message: 'Are you coming today?' },
        { id: '3', message: 'Can you send me the documents we talked about pls? I will need them tomorrow' }
    ];

    let dialogsElements = dialogs.map(
        d => <DialogItem name={d.name} id={d.id} />
    );

    let messageElements = messages.map(m => <MessageItem message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Messages;

