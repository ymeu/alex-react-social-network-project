import React from 'react';
import classes from './messages.module.css';
import DialogItem from './dialogItem/dialogItem';
import MessageItem from './message/messageItem';


const Messages = (props) => {

    let dialogsElements = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} />
    );

    let messageElements = props.messages.map(m => <MessageItem message={m.message} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div>
                    <textarea value={props.newMessageText} onChange={onMessageChange} ref= {newMessage} className={classes.textarea}></textarea>
                </div>
                <div>
                    <button onClick={addMessage} className={classes.sendButton}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;

