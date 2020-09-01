import React from 'react';
import classes from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.itemBlock}>
        <div className = {classes.item}> 
          <a>Profile</a>
        </div>
        <div className = {classes.item}>
          <a>Messages</a>
        </div>
        <div className = {classes.item}>
          <a>News</a>
        </div>
        <div className = {classes.item}>
          <a>Music</a>
        </div>
        <div className = {classes.item}>
          <a>Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;