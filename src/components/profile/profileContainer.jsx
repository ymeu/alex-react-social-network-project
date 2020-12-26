import React from 'react';
import Profile from './profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import Preloader from '../common/preloader/preloader';

class ProfileContainer extends React.Component {
    
    componentDidMount() {    
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;  
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {        
            this.props.setUserProfile(response.data);
            })
    }

    render () {  
        return  <Profile {...this.props} profile={this.props.profile} /> 
    }
}

let UrlDataComponent = withRouter (ProfileContainer);

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default connect (mapStateToProps, { setUserProfile })(UrlDataComponent);