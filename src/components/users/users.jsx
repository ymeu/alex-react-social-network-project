import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink, Redirect } from 'react-router-dom';
import Paginator from '../common/paginator/paginator';
import Preloader from '../common/preloader/preloader';

const Users = (props) => {

    if (props.isFetching) {
        return <Preloader />
    }

    // let followUnfollowRedirect = (u) => {
    //     if (props.isAuth) {
    //         return props.follow(u.id)
    //     } else {
    //         return <Redirect to={/'login'} />
    //     } 
    // }
    

    return (
        <div>
            <Paginator {...props} />
            {props.users.map(u =>
                <div key={u.id} className={classes.userProfileContainer}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
                        </NavLink>
                    </span>
                    <span className={classes.description}>
                        <NavLink to={'/profile/' + u.id} className={classes.name}>{u.name}</NavLink>
                        <div className={classes.userInfo}>{u.status}</div>
                    </span>
                    <span className={classes.followUnfollowButton}>
                        {u.followed
                            ? <button disabled={props.followButtonDisabled.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)
                            }} className={classes.unfollowButton}>
                                <span className={classes.unfollowNotOnHover}>Followed</span>
                                <span className={classes.unfollowOnHover}>Unfollow</span>
                                </button>
                            : <button disabled={props.followButtonDisabled.some(id => id === u.id)} onClick={() => {props.follow(u.id)
                            }} className={classes.followButton}>Follow</button>}
                    </span>
                </div>
            )}
        </div>
    )
}

export default Users;