import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


const auth = getAuth(app)
export const UserContext = createContext()
const AuthContext = ({children}) => {
    const [user, setUser] = useState({arman: 'Habijabi'})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email,password,profile)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const infoUpdate = (profile)=>{
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

    const userInfo = {user,createUser,infoUpdate,logOut,logIn,googleLogin,loading,facebookLogin,githubLogin}
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;