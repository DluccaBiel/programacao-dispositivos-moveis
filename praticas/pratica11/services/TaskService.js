import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getTasks = () => {
    return axios
        .get(`${API_URL}/`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

export const addTask = (task) => {
    return axios
        .post(`${API_URL}/`, task)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

export const updateTask = (taskId, task) => {
    return axios
        .put(`${API_URL}/${taskId}`, task)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

export const deleteTask = (taskId) => {
    return axios
        .delete(`${API_URL}/${taskId}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};