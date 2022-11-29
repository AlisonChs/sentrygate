import React, { useState, useContext } from "react";
import Context from '../Context'

export function StoreProvider({ children }) {
    const ctx = useContext(Context)

    const [auth, setAuth] = useState(ctx.auth)
    const [user, setUser] = useState(ctx.user)
    const [typeUser, setTypeUser] = useState(ctx.typeUser)

    return (
        <Context.Provider
            value={{
                auth,
                setAuth,
                user,
                setUser,
                typeUser,
                setTypeUser
            }}
        >
            {children}
        </Context.Provider>
    )
}
