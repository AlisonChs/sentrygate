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

    const signin = (email, Password) => {
        const usersStorage = JSON.parse(localStorage.getItem("sentrygate"))

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].enail === email && hasUser[0].password === password)
                setUser({ email, password });
            return;
        } else {
            return "E-mail ou senha incorretos";
        }

    }
    return <AuthContext.Provider>{children}</AuthContext.Provider>
};