import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../api/api.js';
import "./register.css";

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        register(username, email, password).then((data) => console.log(data));

        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container">
            <div className="content">
                <h2 style={{ fontSize: "35px", color: "grey" }}>REGISTER</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-element">
                        <label htmlFor="username" style={{ marginRight: "10px" }}>Username:</label>
                        <input
                            style={{ height: "25px", width: "250px" }}
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email" style={{ marginLeft: "30px", marginRight: "10px" }}>Email:</label>
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
                            style={{ height: "25px", width: "250px" }}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="submit" type="submit" style={{ backgroundColor: "green" }}>Register</button>
                    <Link to="/login">
                        <button className="submit" style={{ backgroundColor: "red" }}>Go to login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;