import { connect } from 'react-redux';
import NavFriends from './navFriends';

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
}
const NavFriendsContainer = connect(mapStateToProps) (NavFriends);

export default NavFriendsContainer;

