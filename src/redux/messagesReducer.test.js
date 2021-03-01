import messagesReducer, { sendMessageCreator, deleteMessage } from './messagesReducer';

let state = {
    messages: [
        { id: '1', message: 'Hey, how are you?' },
        { id: '2', message: 'Are you coming today?' },
        { id: '3', message: 'Can you send me the documents we talked about pls? I will need them tomorrow' }
    ]
};

it('length of messages should be incremented', () => {
    // 1. test data
    let action = sendMessageCreator('This is my new message');

    // 2. action
    let newState = messagesReducer(state, action);

    // 3. expectation
    expect(newState.messages.length).toBe(4);
});

it('length of messages should be decremented', () => {
    // 1. test data
    let action = deleteMessage(2);
   
    // 2. action
    let newState = messagesReducer(state, action);

    // 3. expectation
    expect(newState.messages.length).toBe(2);
});
 

