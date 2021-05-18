import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    posts: [
        { id: '1', post: 'You can also edit the profile details and upload a new profile photo. These data is sent to server and will remain after the page reload. You are still free try it as many times as you want.', likesCount: '11' },
        { id: '2', post: 'You can change profile status by a double click on the status. To save it just click with the cursor outside the status area.', likesCount: '2' },
        { id: '3', post: 'Posts that you add get erased after a page reload, so you can add as many posts as you want.', likesCount: '8' },
        { id: '4', post: 'The textarea has a validation and you can`t add an empty post or a post containing more than 30 symbols.', likesCount: '5' },
        { id: '5', post: 'Hey, you can add new posts here!', likesCount: '3' }
    ],
    profile: null,
    status: null,
    isFetching: false
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
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id != action.postID) }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos} }
        }
        case SAVE_PROFILE_SUCCESS: {
            return { ...state, profile: action.profile} 
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postID) => ({ type: DELETE_POST, postID })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
const saveProfileSuccess = (profile) => ({ type: SAVE_PROFILE_SUCCESS, profile })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getUserProfile = (userID) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.getProfile(userID);
    dispatch(setUserProfile(response.data));
    dispatch(toggleIsFetching(false));
}

export const getStatus = (userID) => async (dispatch) => {
    const response = await profileAPI.setStatus(userID);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
    dispatch(toggleIsFetching(false));
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    const userID = getState().auth.userID;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userID));
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
        dispatch(toggleIsFetching(false));
        return Promise.reject(response.data.messages[0]);
    }
    
}

export default profileReducer;