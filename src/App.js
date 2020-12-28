import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import News from './components/news/news';
import { Route } from 'react-router-dom';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Friends from './components/friends/friends';
import MessagesContainer from './components/messages/messagesContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';

const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/messages' render={() => <MessagesContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/Friends' render={() => <Friends />} />
        <Route path='/Users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
