import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase/useFirebase';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const allContext = useFirebase()
    return (
        <AuthProvider.Provider value={allContext}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;