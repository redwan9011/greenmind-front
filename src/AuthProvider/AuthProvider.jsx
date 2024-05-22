import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Authentication/Firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [ user, setuser] = useState(null)
    const [ loading, setLoading] = useState(true)


     const signup = (email, password) => {
        setLoading( true)
         return createUserWithEmailAndPassword(auth, email, password)
     }
    const login = ( email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ( ) => {
        setLoading(true);
        signOut(auth)
    }
    useEffect( ()=> {
     const unSubscribe = onAuthStateChanged( auth, currentUser => {
            setuser(currentUser);
            console.log("curent User" , currentUser);
            setLoading(false)
        })
        return ()=> {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signup,
        login,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;