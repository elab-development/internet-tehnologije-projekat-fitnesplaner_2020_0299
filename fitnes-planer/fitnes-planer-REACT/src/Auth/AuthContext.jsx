import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    authenticated: false,
    loading: true,
    role: null,
});

export default function AuthProvider({children}) {
    const [role, setRole] = useState();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication = () => {
        if (localStorage.getItem("token")) {
            setAuthenticated(true);
            setRole(localStorage.getItem("role"));
        }
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, loading, role }}>
            { children }
        </AuthContext.Provider>
    );
}