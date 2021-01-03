import React from 'react';
import Users from './users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, disableFollowButton, getUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Preloader from '../common/preloader/preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                users = {this.props.users}    
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage} 
                onPageChanged = {this.onPageChanged}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                followButtonDisabled = {this.props.followButtonDisabled}
                disableFollowButton = {this.props.disableFollowButton}

        />
    </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followButtonDisabled: state.usersPage.followButtonDisabled
    }
}


export default connect (mapStateToProps, 
    {follow, unfollow, setCurrentPage, disableFollowButton, getUsers})(UsersContainer);
