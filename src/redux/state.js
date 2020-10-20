let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', post: 'Hey! How are you?', likesCount: '59' },
                { id: '2', post: 'Hey, it is my first post!', likesCount: '11' }
            ],
            newPostText: 'type your comment'
        },
        messagesPage: {
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
            newMessageText: 'type your message'
        },
        navbar: {
            friends: [
                { id: '1', name: 'Anton', ava: "https://vokrug-tv.ru/pic/person/4/5/9/5/4595cbf1bb37fdc619ee8c0d04d05dd7.jpg" },
                { id: '2', name: 'Dima', ava: "https://cdn.iz.ru/sites/default/files/styles/900x506/public/article-2017-11/RIAN_3173477.HR_.ru_1.jpg?itok=T8jXYstr"},
                { id: '3', name: 'Charlie', ava: "https://premierliga.ru/netcat_files/3/1/Chorluka-Vedran-55790.jpg"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 3,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage (newText) {
        let newMessage = {
            id: 4, 
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }    
}

export default store;