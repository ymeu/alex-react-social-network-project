import { actionTypes } from 'redux-form';

const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

let initialState = {
    dialogs: [
        { id: '1', name: 'Alexey' }
        // { id: '2', name: 'Kate' },
        // { id: '3', name: 'Boris' }
    ],
    messages: [
        { id: '1', message: 'Hey, welcome to the messages page!' },
        { id: '2', message: 'A lot of new features are coming soon here' },
        { id: '3', message: 'At the moment you can only send your message' },
        { id: '4', message: 'You can`t send an empty message or a message exceeding 30 characters' }
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