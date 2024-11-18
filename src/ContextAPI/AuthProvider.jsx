import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext();


const registerUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const authInfo ={
    registerUser
}



const AuthProvider = ({children}) => {
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