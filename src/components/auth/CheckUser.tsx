import Cookies from "js-cookie";
import { User } from "../auth/UserContext";
import axiosInstance from "../../axiosInstance";

/**
 *  Checks for previosly obtained tokens
 *  returns - boolean (The User if tokens are found, null if not)
 *  Sets the user object of the app if tokens were found
 */
function isLoggedIn(): null | User {

    let token = Cookies.get("jwtToken");
    let uId = Cookies.get("userId"),
    uName = Cookies.get("userName"),
    uRole = Cookies.get("role");

    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const user = {
            userName: uName || "",
            userId: uId ?  parseInt(uId) : 0,
            role: uRole || ""
        };

        console.log(user);
        return user // Set the user object
    }

    return null;
}

export default isLoggedIn;