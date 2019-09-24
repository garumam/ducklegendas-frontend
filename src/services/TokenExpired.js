import React from 'react';
import { Redirect } from "react-router-dom";
import api from './api';

const TokenExpired = (props) => {
    
    async function deleteToken() {
        
        await api.get('/erro')
        .then(r=>{
          console.log(r);
    
          localStorage.clear();

        }).catch(e=>{
          console.log(e.response.data.message)
        })
        
    }
    deleteToken();

    return (
        <Redirect to={{pathname: "/painel",state:{ from: props.location}}} />
    );
}

export default TokenExpired;