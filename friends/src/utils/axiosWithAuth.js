import axios from 'axios'

export const axiosWithAuth = ()=>{
    //Get token for localstorage
    const token = localStorage.getItem('token');
    return axios.create({
        headers:{
            authorization:token
        },
        baseURL:'http://localhost:5000/api'
    });
}