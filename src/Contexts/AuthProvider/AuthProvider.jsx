import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.Config';

export const AuthContext = createContext();

const auth = getAuth(app);
const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
}

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {user, providerLogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;