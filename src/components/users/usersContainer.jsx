
import Users from './users';
import { followedAC, unfollowedAC, setUsersAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followedAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowedAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);