import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
 const [user, setUser] = useState({
  auth: false
 })

 return (
  <AuthContext.Provider value={{ user, setUser }}>
   {props.children}
  </AuthContext.Provider>
 )
}