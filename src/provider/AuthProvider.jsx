import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();




    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }





    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }





    const updateNameAndImage = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }





    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }



    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () =>{
        setLoading(true);
        signOut(auth)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [user])



    const authInfo = {
        user,
        register,
        signIn,
        loading,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        updateNameAndImage
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;