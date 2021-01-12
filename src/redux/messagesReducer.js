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
    ]
};


const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: 
            let newMessage = action.newMessageBody;    
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newMessage}],
            }
        default:
            return state; 
    }
}



export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default messagesReducer;