import Axios from 'axios';


const instance = Axios.create({ 
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': 'f435f5f1-d0aa-4821-9e0c-6d8e13f8c1f3'}
    
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data 
        });
            
    },
    follow (userID) {
        return instance.post(`follow/${userID}`, {})
        .then(response => {
            return response.data 
        });
    },
    unfollow (userID) {
        return instance.delete(`follow/${userID}`)
        .then(response => {
            return response.data 
        });
    },
    getProfile (userID) {
        return instance.get(`profile/` + userID);
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`).then(response => {
            return response.data
        });
    }
}
    


