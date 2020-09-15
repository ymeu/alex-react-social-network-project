import React from 'react';
import classes from './navFriends.module.css';

const NavFriends = () => {
    return (
        <div className={classes.friendsProfiles}>
            <div className = {classes.profile}>
                <img className={classes.imageItem} src="https://vokrug-tv.ru/pic/person/4/5/9/5/4595cbf1bb37fdc619ee8c0d04d05dd7.jpg" />
                <div>Anton</div>
            </div>
            <div className = {classes.profile}>
                <img className={classes.imageItem} src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/article-2017-11/RIAN_3173477.HR_.ru_1.jpg?itok=T8jXYstr" />
                <div>Dima</div>
            </div>
            <div className = {classes.profile}>
                <img className={classes.imageItem} src="https://premierliga.ru/netcat_files/3/1/Chorluka-Vedran-55790.jpg" />
                <div>Charlie</div>
            </div>
        </div>

    )
}

export default NavFriends;