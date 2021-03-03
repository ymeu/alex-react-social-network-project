import React from 'react';
import Users from './users';
import { follow, unfollow, setCurrentPage, disableFollowButton, requestUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Preloader from '../common/preloader/preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowButtonDisabled } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                users = {this.props.users}    
                totalItemsCount = {this.props.totalUsersCount}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followButtonDisabled: getFollowButtonDisabled(state)
    }
}

export default connect (mapStateToProps, 
    {follow, unfollow, setCurrentPage, disableFollowButton, requestUsers})(UsersContainer);
