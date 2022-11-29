import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import Context from "../../contexts/Context";

const PrivateRouteCoordinator = ({ children, redirectTo }) => {
    const { auth, typeUser } = useContext(Context)

    return auth && typeUser === 'coordenador' ? children : <Navigate to={redirectTo} />
}

export default PrivateRouteCoordinator