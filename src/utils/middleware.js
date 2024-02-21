import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuthProtection = (WrappedComponent) => {
    const ProtectedComponent = (props) => {
        const authData = useSelector(state => state.auth);
        if (authData?.token === null) {
            // Redirect to login page if user is not authenticated
            return <Navigate to="/signin" />;
        }
        // Render the wrapped component if user is authenticated
        return <WrappedComponent {...props} />;
    };

    return ProtectedComponent;
};

export default withAuthProtection;
