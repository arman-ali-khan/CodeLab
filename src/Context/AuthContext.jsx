import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


const auth = getAuth(app)
export const UserContext = createContext()
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email,password,profile)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const infoUpdate = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const facebookLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }


    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const passwordReset = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }


    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    const userInfo = {user,createUser,passwordReset,setLoading,infoUpdate,logOut,logIn,googleLogin,loading,facebookLogin,githubLogin}
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;