import { createContext } from "react";

const type = localStorage.getItem('typeUser')
const auth = JSON.parse(localStorage.getItem('auth'))

const Context = createContext({
    auth: auth ? auth : false,
    setAuth: () => { },
    user: {},
    setUser: () => { },
    typeUser: type ? type : '',
    setTypeUser: () => { }
})

export default Context;