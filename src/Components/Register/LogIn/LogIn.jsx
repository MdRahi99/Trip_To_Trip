import React from 'react';
import {FcGoogle} from "@react-icons/all-files/fc/FcGoogle"
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from '@firebase/auth';

const LogIn = () => {
    
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    };

    return (
        <div className='my-12'>
            <div className='text-3xl flex justify-center'>
                <button onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default LogIn;