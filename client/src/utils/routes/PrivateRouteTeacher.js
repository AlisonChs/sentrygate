import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import Context from "../../contexts/Context";

const PrivateRouteTeacher = ({ children, redirectTo }) => {
    const { auth, typeUser } = useContext(Context)

    return auth && typeUser === 'professor' ? children : <Navigate to={redirectTo} />
}

export default PrivateRouteTeacher