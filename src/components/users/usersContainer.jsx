import React from 'react';
import Users from './users';
import { follow, unfollow, setCurrentPage, disableFollowButton, requestUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Preloader from '../common/preloader/preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowButtonDisabled, getIsAuth } from '../../redux/usersSelectors';
import { compose } from 'redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    
    render() {

        if (this.props.isFetching) {
            return <Preloader />
          }

        return <Users 
                users = {this.props.users}    
                totalItemsCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage} 
                onPageChanged = {this.onPageChanged}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                followButtonDisabled = {this.props.followButtonDisabled}
                disableFollowButton = {this.props.disableFollowButton}
                isFetching = {this.props.isFetching}
                isAuth={this.props.isAuth}
        />
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followButtonDisabled: getFollowButtonDisabled(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(connect(mapStateToProps, 
    {follow, unfollow, setCurrentPage, disableFollowButton, requestUsers}), withAuthRedirect)(UsersContainer);
