import React from 'react';
import Users from './users';
import { followedAC, unfollowedAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching (true);      
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {  
            this.props.toggleIsFetching (false);        
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
                
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching (false );    
            this.props.setUsers(response.data.items);
            
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
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        }, 
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);
