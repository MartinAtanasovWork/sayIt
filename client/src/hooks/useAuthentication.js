import { useContext} from "react";
import authenticationAPI from "../API/authenticationAPI";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuthentication() {
    let { token,changeAuthData } = useContext(AuthContext);


    async function login(email, password) {
        let reqData = await authenticationAPI.login(email, password);
                
        if (!reqData.error) {
           changeAuthData(reqData)          
        }

        return reqData;
    }

    async function register(email, password) {
        let reqData = await authenticationAPI.register(email, password);

        if (!reqData.error) {
            changeAuthData(reqData);
        }

        return reqData;
    }

    async function logout() {
        await authenticationAPI.logout(token);

        changeAuthData({});
    }

    return {
        login,
        register,
        logout        
    }
}
