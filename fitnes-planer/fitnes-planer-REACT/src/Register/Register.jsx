import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../api/api.js';
import "./register.css";

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        register(username, email, password).then((data) => {
            if (data['error']) {
                setErrorMessage(data['error']);
            }
            setLoading(false);
        });

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
                    <p style={{ color: "red" }}>{errorMessage}</p>
                    <button disabled={loading} className="submit" type="submit" style={{ backgroundColor: "green" }}>Register</button>
                    <Link to="/login">
                        <button disabled={loading} className="submit" style={{ backgroundColor: "red" }}>Go to login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;