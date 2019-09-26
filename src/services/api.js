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

export const isToken = () =>{
    const token = localStorage.getItem('token');
   
    return token;
}

export const getError = (props) => {
    if(isToken() && props.location.state===undefined){
        api.get('/error')
       .then(r=>{
         console.log(r);
   
         localStorage.clear();
   
       }).catch(e=>{
         localStorage.clear();
         if (e.response === undefined) { // NETWORK ERROR
           console.log('Sem conexão');
         }else{
           console.log(e.response.data.error);
         }
   
       })
     }
}
 
export const baseUrl = 'http://127.0.0.1:8000/';

const api = axios.create({
    baseURL: `${baseUrl}api`,
    headers:{
        Authorization: isAuthenticated(),
        Accept: '*/*'
    }
});

// api.interceptors.response.use((response) => {
//     return response.data;
// }, function (error) {
//         // console.log(error.response.data.error);
//     return Promise.resolve(error.response.data.error);
// });

export default api;