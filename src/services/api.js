import axios from 'axios';


export const getAuth = () =>{
    const token = localStorage.getItem('token');
    return token;
}
const api =  axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers:{
        Authorization:getAuth()
    }
});
export default api;