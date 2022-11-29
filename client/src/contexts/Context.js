import { createContext } from "react";

const type = localStorage.getItem('typeUser')
const authentication = localStorage.getItem('auth')

const Context = createContext({
    auth: authentication ? JSON.parse(authentication) : false,
    setAuth: () => { },
    user: {},
    setUser: () => { },
    typeUser: type ? type : '',
    setTypeUser: () => {}
})

export default Context;