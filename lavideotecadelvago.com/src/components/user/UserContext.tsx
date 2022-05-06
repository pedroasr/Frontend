import { createContext } from "react";
import { User } from "./UserReducer";

export type UserContextProps = {
    userState: User,
    loginUser: (user: User) => void,
    logoutUser: (user: User) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);