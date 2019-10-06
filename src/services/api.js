import axios from 'axios';
import CryptoJS from 'crypto-js';


export const isAuthenticated = () => {

  // try{
    const user = localStorage.getItem("user");
    if(typeof user === 'string' || user instanceof String){

      const decrypt = CryptoJS.AES.decrypt(user,'senha secreta') || null;
      if(decrypt){
      const decryptedData = IsJsonString(decrypt.toString(CryptoJS.enc.Utf8));
      
        if(decryptedData){
          console.log('ddasda',decryptedData.user.access_token)
          const token = decryptedData.user.access_token;
          const date = decryptedData.user.token_expirate;
          const dateToken = new Date(date);
          // let novadatatoken = novadate.getFullYear() + "-" + (novadate.getMonth() + 1) + "-" + novadate.getDate() + " " + novadate.getHours() + ":" + novadate.getMinutes() + ":" + novadate.getSeconds()
      
          // console.log("data token: "+novadatatoken);
          const dateNow = new Date();
          // let formatted_date = datejs.getFullYear() + "-" + (datejs.getMonth() + 1) + "-" + datejs.getDate() + " " + datejs.getHours() + ":" + datejs.getMinutes() + ":" + datejs.getSeconds()
          // console.log("data atual formatada: "+formatted_date.toString())
          
          // console.log(dateToken.getTime() < dateNow.getTime())
          return (dateToken.getTime() > dateNow.getTime() ) ? `Bearer ${token}` : null;
      }else{
        return null;
      }
      
      }
    }

    return null;
   
  // }catch{
  //   console.log('error')
  //   return null;
  // }
   
   
}

function IsJsonString(str) {
  try {
      return JSON.parse(str);
  } catch (e) {
      return false;
  }
}

// export const isToken = () =>{
//     const token = localStorage.getItem('token');
   
//     return token;
// }

// export const getError = (props) => {
//     if(isToken() && props.location.state===undefined){
//       const res = api.get('/error');
//       if(res.error){
//         console.log(res.error);
//         localStorage.clear();
//       }
//     }
// }

export const postRequest = (uri, body, config) => api.post(uri, body, config);

export const getRequest = (uri) => api.get(uri);

export const refreshAuthorization = () => {api.defaults.headers.Authorization = isAuthenticated();}

export const baseUrl = 'http://127.0.0.1:8000/';

const api = axios.create({
    baseURL: `${baseUrl}api`,
    headers:{
        Authorization: isAuthenticated(),
        Accept: '*/*'
    }
});

api.interceptors.response.use((response) => {
    return response.data;
}, function (error) {
    const errorResponse = {};
    if (error.response === undefined || error.response.status === 500) { // NETWORK ERROR
      errorResponse.error = ['Problema de conexão com o servidor, tente mais tarde!'];
    }else{
      if(error.response.status === 401){
        localStorage.clear();
        window.location.replace(`${window.location.origin}/painel`);
      }
      errorResponse.error = error.response.data.error;
    }
    
    return errorResponse;
});