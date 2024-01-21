import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    authenticated: false,
    loading: true
});

export default function AuthProvider({children}) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication = () => {
        if (localStorage.getItem("token")) {
            setAuthenticated(true);
        }
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, loading }}>
            { children }
        </AuthContext.Provider>
    );
}