import messagesReducer, { sendMessageCreator, deleteMessage } from './messagesReducer';

let state = {
    messages: [
        { id: '1', message: 'Hey, welcome to the messages page!' },
        { id: '2', message: 'A lot of new features are coming soon here' },
        { id: '3', message: 'At the moment you can send your message' },
        { id: '4', message: 'At the moment you can send your message' },
        { id: '4', message: 'You can`t send an empty message or a message exceeding 30 characters though' }
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
 

