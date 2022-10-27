import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


const auth = getAuth(app)
export const UserContext = createContext()
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [dark, setDark] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // user create with email
    const createUser = (email,password,profile)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // name and photourl update
    const infoUpdate = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    
    //user login
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // facebook login
    const facebookLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //password reset
    const passwordReset = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    // logout
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

    const userInfo = {user,createUser,setDark,dark,passwordReset,setLoading,infoUpdate,logOut,logIn,googleLogin,loading,facebookLogin,githubLogin}
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;