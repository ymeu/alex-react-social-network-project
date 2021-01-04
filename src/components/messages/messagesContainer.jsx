import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messagesReducer';
import Messages from './messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';


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

let AuthRedirectComponent = withAuthRedirect (Messages);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default MessagesContainer;

