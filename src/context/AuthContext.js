import React, { createContext, useReducer, useEffect } from 'react';
import { decryptLogin, encryptLogin } from 'services/api';

const AuthContext = createContext([{}, () => {}]);

function AuthProvider (props) {
    const [user, setUser] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        decryptLogin().user
      );
    useEffect(() => {
        const data = decryptLogin();
        if(data){
            encryptLogin({ user: { ...data.user, ...user } });
        }
    },[user]);
    console.log("user vindo do provider route",user)
    return(
        <AuthContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };