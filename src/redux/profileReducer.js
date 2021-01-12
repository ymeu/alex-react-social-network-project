import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        { id: '1', post: 'Hey! How are you?', likesCount: '59' },
        { id: '2', post: 'Hey, it is my first post!', likesCount: '11' }
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                post: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userID) => {
    return (dispatch) => {
        usersAPI.getProfile(userID).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.setStatus(userID).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })

}


export default profileReducer;