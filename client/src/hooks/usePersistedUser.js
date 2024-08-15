import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import authenticationAPI from "../API/authenticationAPI";

export default function usePersistedUser() {
    let {changeAuthData} = useContext(AuthContext);
    let token = localStorage.getItem("token");

    useEffect(() => {
        (async ()=>{
            let user = await authenticationAPI.currentUser(token);
                     
            if(user.error){
                changeAuthData({});
            }else{
                changeAuthData({user});
            }
        })();
    },[]);      
}