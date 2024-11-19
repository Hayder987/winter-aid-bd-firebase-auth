import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [resetEmail, setResetEmail] = useState(null)

    const registerUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    
    const logInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(name, path)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, {displayName:name, photoURL:path})
    }
    const googleLogin=()=>{
        setLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const logOutUser = () =>{
       return signOut(auth)
    }
    const passwordRest=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
       setUser(currentUser)
       setLoading(false)
    });
    return ()=>{
        unsubscribe()
    }
  },[]);

 
    
    const authInfo ={
        registerUser,
        logInUser,
        user,
        updateUser,
        googleLogin,
        logOutUser,
        loading,
        passwordRest,
        resetEmail,
        setResetEmail
    };

    console.log(resetEmail)

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.object
}

export default AuthProvider;