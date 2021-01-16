import { getAuthUserData } from './authReducer';

const INITIALISED = 'INITIALISED';

let initialState = {
    initialised: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALISED: {
            return {
                ...state,
                initialised: true
            }
        }
        default:
            return state;
    }
}

export const initialised = () => ({ type: INITIALISED });


export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //when there are a number of dispatches, we put them in an array '[promise]' and do the following
    Promise.all([promise])
        .then(() => {
            dispatch(initialised())
        })
}

export default appReducer;