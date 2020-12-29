import React from 'react';
import Users from './users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, disableFollowButton } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching (true);      
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {  
            this.props.toggleIsFetching (false);        
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching (true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching (false );    
            this.props.setUsers(data.items); 
        })
        
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
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, disableFollowButton})(UsersContainer);
