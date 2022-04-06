import {createContext, useContext} from 'react'

const context = createContext();

export const useAuth = () => {
    const authContext = useContext(context);
    return authContext;
}

export const AuthProvider = ({children}) => {
    const user = {
        login: true
    }
    return(
        <context.Provider value={{user}}>
            {children}
        </context.Provider>
    )
}