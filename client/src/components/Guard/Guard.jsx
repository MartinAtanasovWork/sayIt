import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import NotFound from "../NotFound/NotFound";

export default function Guard({ children, access }) {
       let { isLogged } = useContext(AuthContext);

    if (isLogged) {
        if (access == "guest") {
            return (
                <NotFound />
            )
        } else {
            return (
                children
            )
        }
    } else {
        if (access == "user") {
            return (
                <NotFound />
            )
        } else {

            return (
                children
            )
        }
    }
}   