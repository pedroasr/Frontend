import { useReducer } from "react";
import { UserContext } from "./UserContext";
import userReducer, { User } from "./UserReducer";

interface props {
    children : JSX.Element | JSX.Element[]
}

const initialUser = {
    id: 0,
    username: ''
}

const UserProvider = ({children}: props) => {

    const [userState, dispatch] = useReducer(userReducer, initialUser);

    const loginUser = (user: User) => {
        dispatch({ type: "auth - login", payload: user })
    }
    const logoutUser = (user: User) => {
        dispatch({ type: "auth - logout", payload: user })
    }

    return(
        <UserContext.Provider value={{userState, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;