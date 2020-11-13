import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';
import Messages from './messages';


const MessagesContainer = (props) => {
    
    let state = props.store.getState().messagesPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body)); 
    }

    return (
        <Messages 
            updateNewMessageBody={onMessageChange} 
            sendMessage={onSendMessageClick}
            newMessageBody={state.newMessageBody}
            messagesPage={state} />
    )
}

export default MessagesContainer;

