import axios from "axios"
import { toast } from "react-toastify"


export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL


export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


//Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/register`, userData,
            { withCredentials: true }
        )
        if (response.statusText === "Created") {
            toast.success("User registered Successfully")
        }
        return response.data
    }
    catch (error) {
        const message = (error.response && error.resonse.data && error.resposnse.data.message) || error.message || error.toString();
        toast.error(message);
    }
}


// Login User
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/login`, userData)
        // console.log(response.statusText)
        if (response.statusText === "OK") {
            toast.success("Login Successful...")
        }
        return response.data
    }
    catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

        toast.error(message);
    
    }
}

//Logout user
export const logoutUser = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/users/logout`)

    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        toast.error(message);
    }
}


//Logout user
export const forgotPassword = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/forgotpassword`,userData)
        toast.success(response.data.message)

    }
    catch (error) {
        const message = (error.response && error.response.data && error.resposnse.data.message) || error.message || error.toString();
        toast.error(message);
    }
}


//Logout user
export const resetPassword = async (userData, resetToken) => {
    try {
        const response = await axios.put(`${BACKEND_URL}/api/users/resetpassword/${resetToken}`,userData)
        
        return response.data
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        toast.error(message);
    }
}

//get login status
export const getLoginStatus = async (userData, resetToken) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`)
        return response.data
        
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        toast.error(message);
    }
}


//Get User Profile
export const getUser = async (userData, resetToken) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/users/getuser`)
        return response.data
        
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        toast.error(message);
    }
}


//Update user
//Get User Profile
export const updateUser = async (formData) => {
    try {
        const response = await axios.patch(`${BACKEND_URL}/api/users/updateuser`, formData)
        return response.data
        
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        toast.error(message);
    }
}

//Get User Profile
export const changePassword = async (formData) => {
    try {
        const response = await axios.patch(`${BACKEND_URL}/api/users/changepassword`, formData)
        return response.data
        
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        toast.error(message);
    }
}


