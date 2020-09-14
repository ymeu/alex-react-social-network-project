import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Messages from './components/messages/messages';
import News from './components/news/news';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/music/music';
import Settings from './components/settings/settings';
 
const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile posts = {props.state.profilePage.posts} />} />
          <Route path='/messages' render={ () => <Messages dialogs = {props.state.messagesPage.dialogs} messages = {props.state.messagesPage.messages} />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
