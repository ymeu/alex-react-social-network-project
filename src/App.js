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
 
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path ='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
