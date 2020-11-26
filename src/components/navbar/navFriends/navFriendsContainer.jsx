import { connect } from 'react-redux';
import NavFriends from './navFriends';

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
}
const NavFriendsContainer = connect(mapStateToProps) (NavFriends);

export default NavFriendsContainer;

// import React from 'react';
// import classes from './navFriends.module.css';

// const NavFriends = (props) => {
//     let friendsElements = props.friends.map(
//         f => {
//             return (
//                 <div className={classes.profile}>
//                     <img className={classes.imageItem} src={f.ava} />
//                     <div>{f.name}</div>
//                 </div>
//             )
//         }
//     );
//     return (
//         <div className={classes.friendsProfiles}>
//             {friendsElements}
//         </div>
//     )
// }

// export default NavFriends;