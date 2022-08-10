import { createContext } from 'react';

const Context = createContext({
    auth: false,
    setAuth: () => { },
    user: {},
    setUser: () => { }
})

export default Context;