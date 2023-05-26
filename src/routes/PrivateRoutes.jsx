import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
    return <FadeLoader className='my-56 mx-auto'
            color={"#EA572B"}
            loading={loading}
            size={100}
        />
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace />
};

export default PrivateRoutes;