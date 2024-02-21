import axios from 'axios';
import { BASE_URL } from './constants';
import { toast } from 'react-toastify';
export const signIn = async (credentials) => {
    try {

        const response = await axios.post(`${BASE_URL}/login`, credentials);
        // console.log(response)
        if (response.status === 200) {
            toast.success("Login Successful")
            const token = response.data.token;
            return { status: "success", token }
        }
        else {
            toast.error("Something went wrong")
            return { status: "failed" }
        }

        // const userResponse = await axios.get(`${BASE_URL}/users/1`, {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        // });
        // return userResponse.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        return { status: "failed" }
    }
};

export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return { error: 'Unknown error occurred' };
    }
};

export const fetchUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users/1`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

export const logoutUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/logout`);
        toast.success("Logout Success")
        return { status: "success" };
    } catch (error) {
        console.error('Error fetching user:', error);
        toast.error("Error Loggin Out")
    }
};

export const createUser = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, {
            "name": "aman",
            "job": "ttplayer"
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};



const handleApiError = (error) => {
    if (error.response && error.response.data && error.response.data.error) {
        return { error: error.response.data.error };
    }
    return { error: 'Unknown error occurred' };
};
