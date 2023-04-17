import {createContext, useContext, useEffect, useState} from 'react'

import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
GoogleAuthProvider,
signInWithPopup
} from 'firebase/auth'
import {auth} from '../Auth/firebase'
const userAuthContext = createContext()


export function UserAuthContextProvider({children}){
    const[User,setUser]=useState()

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function googleSignIn(){
        const googleAuthProvider=new GoogleAuthProvider()
        return signInWithPopup(auth,googleAuthProvider)
    }
   
    function logIn(email,password){
        console.log("email",email)
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth);
    }
     
    useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])
    
    return(
        <userAuthContext.Provider value={{User,signUp,logIn,logOut,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
}


export function useUserAuth(){
    return useContext(userAuthContext)
}