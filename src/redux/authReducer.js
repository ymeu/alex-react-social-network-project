import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null  // if null then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: 
        case SET_CAPTCHA_URL: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userID, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA, payload: { userID, email, login, isAuth }
})
export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })




export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const login = (email, password, rememberMe, captcha) => async dispatch => {

    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
        } 
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error';
        dispatch(stopSubmit('login', { _error: message }))
    }

}

export const getCaptcha = () => async dispatch => {

    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    
    dispatch(setCaptchaUrl(captchaUrl));
}

export const logout = () => async dispatch => {

    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;