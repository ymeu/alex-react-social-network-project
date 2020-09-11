import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [ 
  {id: '1', post: 'Hey! How are you?', likesCount: '59'},
  {id: '2', post: 'Hey, it is my first post!', likesCount: '11'},
];

let dialogs = [
    { id: '1', name: 'Alexey' },
    { id: '2', name: 'Natalie' },
    { id: '3', name: 'Boris' },
    { id: '4', name: 'Anna' },
    { id: '5', name: 'Tanya' }
];

let messages = [
    { id: '1', message: 'Hey, how are you?' },
    { id: '2', message: 'Are you coming today?' },
    { id: '3', message: 'Can you send me the documents we talked about pls? I will need them tomorrow' }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
