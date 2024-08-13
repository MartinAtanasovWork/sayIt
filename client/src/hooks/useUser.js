import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import authenticationAPI from "../API/authenticationAPI";

export default function useUser() {
    let { token, } = useContext(AuthContext);

    async function currentUser() {
       let user = await authenticationAPI.currentUser(token);

        return user;
    }

    async function changeCurrentUser(userInfo) {        
        let req = await authenticationAPI.changeCurrentUser(userInfo,token);

        return req;
    }


    return {        
        currentUser,
        changeCurrentUser
    }
}