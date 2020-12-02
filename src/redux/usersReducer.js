const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID) {
                        return {...u, isFollowed: true}
                    }
                    return u;
                })       
            }    
        
       case UNFOLLOWED:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID) {
                        return {...u, isFollowed: false}
                    }
                    return u;
                })       
            }   
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }    
        
        default:
            return state; 
    }
}



export const followedAC = (userID) => ({ type: FOLLOWED, userID })
export const unfollowedAC = (userID) => ({ type: UNFOLLOWED, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;