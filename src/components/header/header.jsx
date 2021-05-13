import React from 'react';
import classes from './header.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/react-logo.png';
 
const Header = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to='/profile'>
        <img src={logo} />
      </NavLink>
      <div className={classes.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>  
        : <button><NavLink to='/login'>Login</NavLink></button>}
      </div>
    </header>
  );
}

export default Header;