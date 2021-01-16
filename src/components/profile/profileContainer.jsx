import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {    
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = this.props.authorisedUserID;  
        }
        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    }

    render () {  
        return  <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus} /> 
    }
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserID: state.auth.userID
})

export default compose(
    connect (mapStateToProps, 
        { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
