import { useEffect } from 'react';
import { logout } from "../api/api.js";

function Logout() {
    useEffect(() => {
        logout().then(() => window.location.reload());
    }, []);

    return (
        null
    );
};

export default Logout;