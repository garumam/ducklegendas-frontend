import React, { createContext, useReducer, useEffect } from 'react';
import { decryptLogin, encryptLogin } from 'services/api';

const AuthContext = createContext([{}, () => {}]);

function AuthProvider (props) {
    const [user, setUser] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        decryptLogin().user,
      );
    useEffect(() => {
        try{
            const data = decryptLogin();
            if(user.update){
                console.log("encryptLogin use effect",user)
                encryptLogin({ user: { ...data.user, ...user } });
            }
        }catch(e){
            console.log(e)
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