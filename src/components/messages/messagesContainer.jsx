import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';
import Messages from './messages';
import StoreContext from '../../storeContext';


const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState().messagesPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

               return <Messages
                    updateNewMessageBody={onMessageChange}
                    sendMessage={onSendMessageClick}
                    newMessageBody={state.newMessageBody}
                    messagesPage={state} />
            }}
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;

