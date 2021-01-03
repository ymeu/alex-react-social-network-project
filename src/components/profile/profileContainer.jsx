import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {setProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    
    componentDidMount() {    
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = 2;  
        }
        this.props.setProfile(userID);
    }

    render () {  
        return  <Profile {...this.props} profile={this.props.profile} /> 
    }
}

let UrlDataComponent = withRouter (ProfileContainer);

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default connect (mapStateToProps, { setProfile })(UrlDataComponent);