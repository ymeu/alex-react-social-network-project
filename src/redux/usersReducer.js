const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DISABLE_FOLLOW_BUTTON = 'DISABLE_FOLLOW_BUTTON';

let initialState = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followButtonDisabled: []
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
                users: action.users
            }    
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case DISABLE_FOLLOW_BUTTON:
            return {
                ...state,
                followButtonDisabled: action.isDisabled 
                ? [...state.followButtonDisabled, action.userID]
                : state.followButtonDisabled.filter(id => id != action.userID) 
            }
        default:
            return state; 
    }
}



export const follow = (userID) => ({ type: FOLLOWED, userID })
export const unfollow = (userID) => ({ type: UNFOLLOWED, userID })
export const setUsers= (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const disableFollowButton = (isDisabled, userID) => ({ type: DISABLE_FOLLOW_BUTTON, isDisabled, userID })

export default usersReducer;  