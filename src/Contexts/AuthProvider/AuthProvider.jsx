import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.Config';

export const AuthContext = createContext();

const auth = getAuth(app);

const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
}

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    return signOut(auth);
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

    const authInfo = {user, providerLogin, logOut, createUser, signIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;