import {createContext} from "react"

export const AuthContext = createContext({
    email: "",
    token: "",
    id: "",
    avatar: "",
    isLogged: false,
    changeAuthData: () => undefined
});