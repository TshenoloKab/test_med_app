import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, password }),
            });

            const json = await response.json();

            if (json.authtoken) {
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("phone", phone);

                navigate("/"); 
                window.location.reload();
            } else {
                if (json.errors) {
                    for (const error of json.errors) {
                        setShowerr(error.msg);
                    }
                } else {
                    setShowerr(json.error);
                }
            }
        } catch (err) {
            console.error("Registration error:", err);
            setShowerr("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                value={name} 
                                type="text" 
                                onChange={(e) => setName(e.target.value)} 
                                name="name" 
                                id="name" 
                                className="form-control" 
                                placeholder="Enter your name" 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                value={email} 
                                type="email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                name="email" 
                                id="email" 
                                className="form-control" 
                                placeholder="Enter your email" 
                            />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                value={phone} 
                                type="tel" 
                                onChange={(e) => setPhone(e.target.value)} 
                                name="phone" 
                                id="phone" 
                                className="form-control" 
                                placeholder="Enter your phone number" 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                value={password} 
                                type="password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                name="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="Enter your password" 
                            />
                        </div>

                        <button type="submit" className="btn1">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
