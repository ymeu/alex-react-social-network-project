import { actionTypes } from 'redux-form';

const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

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
        case DELETE_MESSAGE:   
            return { ...state, messages: state.messages.filter(m => m.id != action.messageID) }
        default:
            return state; 
    }
}



export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export const deleteMessage = (messageID) => ({ type: DELETE_MESSAGE, messageID })


export default messagesReducer;