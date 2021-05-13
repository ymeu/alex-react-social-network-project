import React from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavFriendsContainer from './navFriends/navFriendsContainer';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.itemBlock}>
        <div className={classes.item}>
          <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messages' activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='news' activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='settings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        {/* <div className={`${classes.item} ${classes.friends}`}>
          <p>
            <NavLink to='friends' activeClassName={classes.activeLink}>Friends</NavLink>
           <NavFriendsContainer />
          </p>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;