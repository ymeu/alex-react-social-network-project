import { authAPI } from '../api/api';


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const LOGIN = 'LOGIN';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    rememberMe: false,
    password: null,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOGIN: {
            return {
                ...state,
                email: action.email,
                rememberMe: action.rememberMe,
                password: action.password,
                captcha: action.captcha
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ 
    type: SET_AUTH_USER_DATA, data: { userId, email, login } })
export const setLoginData = (email, password, rememberMe, captcha) => ({
    type: LOGIN, email, password, rememberMe, captcha })

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}

export const getLoginData = (email, password, rememberMe, captcha) => dispatch => {
    authAPI.login(email, password, rememberMe, captcha).then(data => {
        debugger;
        if (data.resultCode === 0) {
            dispatch(setLoginData(email, password, rememberMe, captcha))
        }
    })
}

export default authReducer;