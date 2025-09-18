import {createContext, userContext,useState} from "react"

const AuthContext = createContext()

export const AuthProvider = ({chilren}) =>{
    const [user,SetUser] = useState(null)

    const login = (email) => {
        SetUser({ email });
    }
    
    const logout = () => {
        SetUser(null)
    }

    return(
       < AuthContext.provider value={{user,login,logout}}>
            {children}
        </AuthContext.provider>
    )
}
            
export const useAuth = () => userContext(AuthContext)