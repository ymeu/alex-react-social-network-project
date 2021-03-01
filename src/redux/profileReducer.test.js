import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';


let state = {
    posts: [
        { id: '1', post: 'Hey! How are you?', likesCount: '59' },
        { id: '2', post: 'Hey, it is my first post!', likesCount: '11' }
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('This is my new post');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('length of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(1);
   
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);
});
 

