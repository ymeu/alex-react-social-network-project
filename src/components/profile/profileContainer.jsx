import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../HOC/withAuthRedirect';

class ProfileContainer extends React.Component {
    
    componentDidMount() {    
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = 2;  
        }
        this.props.getUserProfile(userID);
    }

    render () {  
        return  <Profile {...this.props} profile={this.props.profile} /> 
    }
}

let AuthRedirectComponent = withAuthRedirect (ProfileContainer);

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

let UrlDataComponent = withRouter (AuthRedirectComponent);

export default connect (mapStateToProps, { getUserProfile })(UrlDataComponent);