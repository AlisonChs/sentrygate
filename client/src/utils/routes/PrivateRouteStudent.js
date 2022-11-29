import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import Context from "../../contexts/Context";

const PrivateRouteStudent = ({ children, redirectTo }) => {
    const { auth, typeUser } = useContext(Context)

    return auth && typeUser === 'estudante' ? children : <Navigate to={redirectTo} />
}

export default PrivateRouteStudent