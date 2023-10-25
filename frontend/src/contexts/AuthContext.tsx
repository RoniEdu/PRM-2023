import { createContext, ReactNode, useEffect, useState } from "react";
import { ICredential, IUser } from "../@types";
import { signIn } from "../services";
import jwtDecode from "jwt-decode";



type AuthContextProps = {
    user: IUser | undefined;
    token: string | undefined;
    login: (credential: ICredential) => Promise<void>;
    logout: () => void;
    register: (user: IUser) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type AuthContextProviderProps = {
    children: ReactNode
}

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<IUser>();
    const [token, setToken] = useState<string>();

    useEffect(()=>{
        //Recupera os valores da local Storage
        const storageToken = localStorage.getItem('token');
        const storageUser = localStorage.getItem('user');

        if (storageToken && storageUser){
            setToken(storageToken)
            setUser(JSON.parse(storageUser));
        }
    }, []);

    const login = async (credential: ICredential) => {

        await signIn(credential)
            .then(result => {

                const token = result.data.acessToken;

                const payloadDecoded: Record<string, any> = jwtDecode(token);

                const userToken: IUser = {
                    id: payloadDecoded.userId,
                    fullname: payloadDecoded.fullName,
                    username: payloadDecoded.userName
                }

                localStorage.setItem('user', JSON.stringify(userToken));
                localStorage.setItem('token', token);

                setUser(userToken);
                setToken(token);

                console.log('TOKEN: ', token)
            })
            .catch(error => {
                return new Promise((resolve, reject) => {
                    reject(error.response.data)
                })
            })
    }

    function logout(){}
    function register(){}

    return (
        <AuthContext.Provider value={{ user, login, token, logout, register}}>
            {props.children}
        </AuthContext.Provider>
    )
}