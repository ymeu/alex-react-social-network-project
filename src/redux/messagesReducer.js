const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const messagesReducer = (state, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state; 
        case SEND_MESSAGE:
            let newMessage = {
                id: 4, 
                message: state.newMessageBody
            }
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state; 
        default:
            return state; 

    }

    // if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //     state.newMessageBody = action.body;
    // }
    // else if (action.type === SEND_MESSAGE) {
    //     let newMessage = {
    //         id: 4, 
    //         message: state.newMessageBody
    //     }
    //     state.messages.push(newMessage);
    //     state.newMessageBody = '';
    // }

    // return state; 
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
    ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })

export default messagesReducer;