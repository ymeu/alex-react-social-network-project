import React from 'react';
import classes from './messages.module.css';
import DialogItem from './dialogItem/dialogItem';
import MessageItem from './message/messageItem';



const Messages = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.messagesPage.messages.map(m => <MessageItem message={m.message} />);
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body); 
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div><textarea  
                    value={props.newMessageBody} 
                    onChange={onMessageChange} 
                    placeholder='Enter your message'
                    className={classes.textarea}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={classes.sendButton}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;

