import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage} onClick={(e) => { props.onPageChanged(p) }} >{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.isFollowed
                                    ? <button disabled={props.followButtonDisabled.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id) }} className={classes.button} >Unfollow</button>
                                    : <button disabled={props.followButtonDisabled.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id) }} className={classes.button} >Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <NavLink to={'/profile/' + u.id}>
                                    <div className={classes.name}>{u.name}</div>
                                </NavLink>
                                <div className={classes.userInfo}>{u.status}</div>
                            </span>

                            <span>
                                <div className={classes.userInfo}>{'u.location.city'}</div>
                                <div className={classes.userInfo}>{'u.location.country'}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div >
    )
}


export default Users;