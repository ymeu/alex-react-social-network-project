import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
    <header className= {classes.header}>
    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fabali.ru%2Fwp-content%2Fuploads%2F2011%2F01%2FLokomotiv_Moscow-600x720.png&f=1&nofb=1' />
  </header>
    );
}

export default Header;