import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';


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
                                    ? <button onClick={() => { 
                                        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {'API-KEY': 'f435f5f1-d0aa-4821-9e0c-6d8e13f8c1f3'}
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                            });
                                     }} className={classes.button} >Unfollow</button>
                                    : <button onClick={() => {
                                        Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {'API-KEY': 'f435f5f1-d0aa-4821-9e0c-6d8e13f8c1f3'}
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                            });
                                    }} className={classes.button} >Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <NavLink to={'/profile/' + u.id}>
                                    <div className={classes.name}>{u.name}</div>
                                </NavLink>
                                <div>{u.status}</div>
                            </span>

                            <span>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div >
    )
}


export default Users;