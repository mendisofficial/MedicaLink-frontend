import { ReactNode, createContext, useContext,useState } from "react";

interface User{
    userId : number,
    userName : string,
    role : string,
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface UserProviderProps{
    children : ReactNode
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: UserProviderProps) => {
    const [user, setUser] = useState<User | null>({userName : '', userId:1, role:'admin'}); // Pass this {userName : '', userId:1, role:''}

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export const UseUser = () : UserContextType => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}