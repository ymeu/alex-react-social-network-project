import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';
import Messages from './messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;

// const MessagesContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {(store) => {

//                 let state = store.getState().messagesPage;

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }

//                 let onMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }

//                 return <Messages
//                     updateNewMessageBody={onMessageChange}
//                     sendMessage={onSendMessageClick}
//                     newMessageBody={state.newMessageBody}
//                     messagesPage={state} />
//             }}
//         </StoreContext.Consumer>
//     )
// }
