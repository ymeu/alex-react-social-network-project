import React from 'react';
import classes from './messages.module.css';
import DialogItem from './dialogItem/dialogItem';
import MessageItem from './message/messageItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';


const Messages = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = state.messages.map(m => <MessageItem message={m.message} />);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        debugger;
        props.store.dispatch(updateNewMessageBodyCreator(body)); 
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div><textarea  
                    value={newMessageBody} 
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

