import {createContext, useContext} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

const context = createContext();


// ready the context
export const useAuth = () => {
    const authContext = useContext(context);
    if(!authContext) throw new Error("There is not auth provider")
    return authContext;
}

export const AuthProvider = ({children}) => {
    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    return(
        <context.Provider value={{signup}}>
            {children}
        </context.Provider>
    )
}