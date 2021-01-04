import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';
import Messages from './messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
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

