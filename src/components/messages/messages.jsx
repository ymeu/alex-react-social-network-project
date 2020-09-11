import React from 'react';
import classes from './messages.module.css';
import DialogItem from './dialogItem/dialogItem';
import MessageItem from './message/messageItem';


const Messages = (props) => {

    let dialogsElements = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} />
    );

    let messageElements = props.messages.map(m => <MessageItem message={m.message} />);

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

