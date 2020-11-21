import React from 'react';
import classes from './navFriends.module.css';
import StoreContext from '../../../storeContext';

const NavFriends = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let friendsElements = store.getState().navbar.friends.map(
                    f => {
                        return (
                            <div className={classes.profile}>
                                <img className={classes.imageItem} src={f.ava} />
                                <div>{f.name}</div>
                            </div>
                        )
                    }
                )
                return (
                    <div className={classes.friendsProfiles}>
                      {friendsElements}
                    </div>   
                )
            }}
        </StoreContext.Consumer>
    )
}

export default NavFriends;


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