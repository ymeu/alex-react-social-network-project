const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: '1', name: 'Alexey' },
        { id: '2', name: 'Natalie' },
        { id: '3', name: 'Boris' },
        { id: '4', name: 'Anna' },
        { id: '5', name: 'Tanya' }
    ],
    messages: [
        { id: '1', message: 'Hey, how are you?' },
        { id: '2', message: 'Are you coming today?' },
        { id: '3', message: 'Can you send me the documents we talked about pls? I will need them tomorrow' }
    ],
    newMessageBody: ''
};


const messagesReducer = (state = initialState, action) => {
    
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