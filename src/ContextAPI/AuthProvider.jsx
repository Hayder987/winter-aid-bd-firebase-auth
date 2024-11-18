import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const registerUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    };
    
    const logInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(name, path)=>{
       return updateProfile(auth.currentUser, {displayName:name, photoURL:path})
    }
    const googleLogin=()=>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const logOutUser = () =>{
       return signOut(auth)
    }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
       setUser(currentUser)
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
        logOutUser
    };
    
    console.log(user)

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