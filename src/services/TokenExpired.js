import React from 'react';
import { Redirect } from "react-router-dom";
import api from './api';

const TokenExpired = (props) => {
    
    async function deleteToken() {
        await api.get('/error')
        localStorage.clear();
    }
    deleteToken();

    return (
        <Redirect to={{pathname: "/painel",state:{ from: props.location}}} />
    );
}

export default TokenExpired;