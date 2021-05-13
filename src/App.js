import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import News from './components/news/news';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Friends from './components/friends/friends';
import MessagesContainer from './components/messages/messagesContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import LoginPage from './components/login/loginContainer';
import { initialiseApp } from '../src/redux/appReducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import store from './redux/reduxStore';
import { HashRouter } from 'react-router-dom';
// import { withSuspense } from './components/HOC/withSuspense';

// const MessagesContainer = React.lazy(() => import('./components/messages/messagesContainer'));
// const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.initialiseApp();
  }

  render() {
    if (!this.props.initialised) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/'><Redirect to='/profile'/></Route>
            <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
            <Route path='/messages' render={ () => <MessagesContainer /> } />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/friends' render={() => <Friends />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='*' render={() => <div>404 NOT FOUND</div> } />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialised: state.app.initialised
})

const AppContainer = compose(withRouter(connect(mapStateToProps, { initialiseApp })(App)));

const SocialNetworkApp = (props) => {
  return (
    <HashRouter >
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>)
}


export default SocialNetworkApp;