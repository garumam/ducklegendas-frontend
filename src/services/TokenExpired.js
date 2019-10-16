import React from 'react';
import { Redirect } from "react-router-dom";
import {getRequest} from './api';
import { ROUTES } from 'utils/RoutePaths';

const TokenExpired = (props) => {
    
    async function deleteToken() {
        await getRequest('/error');
        localStorage.clear();
    }
    deleteToken();

    return (
        <Redirect to={{pathname: ROUTES.LOGIN,state:{ from: props.location}}} />
    );
}

export default TokenExpired;