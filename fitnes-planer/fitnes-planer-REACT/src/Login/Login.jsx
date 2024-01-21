import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/api.js';
import "./login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        login(email, password).then((data) => {
            console.log(data)
            if (data['access_token']) window.location.reload();
        });

        setEmail('');
        setPassword('');
    };

    return (
        <div className="container">
            <div className="content">
                <h2 style={{ fontSize: "35px", color: "grey" }}>LOGIN</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-element">
                        <label htmlFor="email" style={{ marginRight: "10px" }}>Email:</label>
                        <input
                            style={{ height: "25px", width: "250px" }}
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password" style={{ marginRight: "10px" }}>Password:</label>
                        <input
                            style={{ height: "25px", width: "250px", marginRight: "30px" }}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="submit" type="submit" style={{ backgroundColor: "green" }}>Login</button>
                    <Link to="/register">
                        <button className="submit" style={{ backgroundColor: "red" }}>Go to register</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;