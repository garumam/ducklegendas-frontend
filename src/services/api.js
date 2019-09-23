import axios from 'axios';


export const isAuthenticated = () =>{
    const token = localStorage.getItem('token');
    const date = localStorage.getItem('expirate');
    const dateToken = new Date(date);
    // let novadatatoken = novadate.getFullYear() + "-" + (novadate.getMonth() + 1) + "-" + novadate.getDate() + " " + novadate.getHours() + ":" + novadate.getMinutes() + ":" + novadate.getSeconds()

    // console.log("data token: "+novadatatoken);
    const dateNow = new Date();
    // let formatted_date = datejs.getFullYear() + "-" + (datejs.getMonth() + 1) + "-" + datejs.getDate() + " " + datejs.getHours() + ":" + datejs.getMinutes() + ":" + datejs.getSeconds()
    // console.log("data atual formatada: "+formatted_date.toString())
    
    // console.log(dateToken.getTime() < dateNow.getTime())
    return (dateToken.getTime() > dateNow.getTime() ) ? `Bearer ${token}` : null;
}

const api =  axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers:{
        Authorization: isAuthenticated(),
        Accept: 'application/json'
    }
});
export default api;