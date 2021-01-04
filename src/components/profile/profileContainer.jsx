import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
    
    componentDidMount() {    
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = 2;  
        }
        this.props.getUserProfile(userID);
    }

    render () {  
        if (!this.props.isAuth) return <Redirect to='login' />
        return  <Profile {...this.props} profile={this.props.profile} /> 
    }
}

let UrlDataComponent = withRouter (ProfileContainer);

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth 
})

export default connect (mapStateToProps, { getUserProfile })(UrlDataComponent);