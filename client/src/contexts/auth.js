import { Password } from "phosphor-react";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userId = localStorage.getItem("sentrygate");
        const usersStorage = localStorage.getItem("sentrygate")
        if (userId && userStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userId).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("sentrygate"))

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password)
                setUser({ email, password });
            return;
        } else {
            return "E-mail ou senha incorretos";
        }

    };

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("sentrygate"))

        const hasUser = usersStorage?.filter((user) => user.email === email)

        let newUser;

        if (hasUser?.length) {
            newUser = [...usersStorage, { email, password}];
        }else {
            newUser = [{email, password}];
        }

        localStorage.setItem("sentrygate", JSON.stringify(newUser)); 
        

    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("sentrygate");
    };

    return <AuthContext.Provider
        value={{user, signed: !!user, signin, signup, signout}}
    >
        {children}
        </AuthContext.Provider>
};