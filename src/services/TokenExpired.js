import React from 'react';
import { Redirect } from "react-router-dom";
import {getRequest} from './api';

const TokenExpired = (props) => {
    
    async function deleteToken() {
        await getRequest('/error');
        localStorage.clear();
    }
    deleteToken();

    return (
        <Redirect to={{pathname: "/painel",state:{ from: props.location}}} />
    );
}

export default TokenExpired;