import Axios from 'axios';



const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { 'API-KEY': 'f435f5f1-d0aa-4821-9e0c-6d8e13f8c1f3' }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userID) {
        return instance.post(`follow/${userID}`, {})
            .then(response => {
                return response.data
            });
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(response => {
                return response.data
            });
    },
    getProfile(userID) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userID);
    }
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/` + userID);
    },
    setStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('data', photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile/`, profile)
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe, captcha = false) {
        return instance.post(`auth/login`, {
            email, password, rememberMe, captcha
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}


   

