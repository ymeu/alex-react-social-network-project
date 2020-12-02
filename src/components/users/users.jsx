import React from 'react';
import classes from './users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers ( [
            { id: '1', photoURL: 'https://media4.s-nbcnews.com/j/newscms/2016_32/1665556/160812_-_lionel_messi_returns_to_international_team_soccer__5ba2800846d2e8dbd2a9e57a283cb127.fit-1240w.jpg',
            name: 'L. Messi', status: 'Playing for Barcelona', location: {city: 'Barcelona', country: 'Spain'}, isFollowed: true },
            { id: '2', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg', 
            name: 'C. Ronaldo', status: 'Forza Juve', location: {city: 'Turin', country: 'Italy'}, isFollowed: true },
            { id: '3', photoURL: 'https://i.pinimg.com/originals/91/b1/9a/91b19a8b25842aacb1fa84c2f9c13986.jpg', 
            name: 'R. Lewandowski', status: 'Best scorer', location: {city: 'Munich', country: 'Germany'}, isFollowed: false },
            { id: '4', photoURL: 'https://i2-prod.mirror.co.uk/incoming/article22526542.ece/ALTERNATES/s615b/0_Manchester-United-v-FC-Kobenhavn-UEFA-Europa-League-Quarter-Final.jpg', 
            name: 'M. Rashford', status: 'MU and England national team', location: {city: 'Manchester', country: 'England'}, isFollowed: false }
            ]
        )
    }

    return (
        <div> {
            props.users.map( u => 
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} className={classes.userPhoto}/>
                        </div>
                        <div> 
                            { u.isFollowed 
                            ? <button onClick = { () => { props.unfollow(u.id) }} >Unfollow</button> 
                            : <button onClick = { () => { props.follow(u.id) }} >Follow</button> }
                        </div>
                    </span>

                    <span>
                        <span>
                            <div className={classes.name}>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
            )
        } </div>
    )

}

export default Users