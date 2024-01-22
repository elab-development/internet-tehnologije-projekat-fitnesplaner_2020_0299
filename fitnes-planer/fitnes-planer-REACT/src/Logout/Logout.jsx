import { useEffect } from 'react';
import { logout } from "../api/api.js";

function Logout() {
    useEffect(() => {
        logout().then(() => window.location.reload());
    }, []);

    return (
        <h2 style={{color: "white", fontSize: "50px", marginTop: "100px"}}>You're being logged out...</h2>
    );
};

export default Logout;