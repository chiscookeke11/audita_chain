import React, { useState } from 'react';
import './LoginSignup.css';
import { image } from '../../components/images';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    
    const handleSubmit = (e) => {
        e.preventDefault();  
        if (action === "Sign Up") {
            
            console.log("Signing up...");
        } else {
            
            console.log("Logging in...");
        }
    };

    return (
      <div className="login-page">
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    {action === "Sign Up" && (
                        <div className="input">
                            <img src={image.name_img} alt="Name Icon" />
                            <input type="text" placeholder='Name' required />
                        </div>
                    )}

                    <div className="input">
                        <img src={image.email_img} alt="Email Icon" />
                        <input type="email" placeholder='Email Address' required />
                    </div>

                    <div className="input">
                        <img src={image.password_img} alt="Password Icon" />
                        <input type="password" placeholder='Password' required />
                    </div>
                </div>

                {action === "Login" && (
                    <div className="forgot-password">
                        Forgot Password?
                    </div>
                )}

                <div className="submit-container">
                    <button type="submit" className="submit completed">
                        {action === "Sign Up" ? "Create Account" : "Log In"}
                    </button>
                </div>
            </form>

            <div className="submit-container">
                <button className='submit completed wallet-btn'>Connect Wallet</button>
                <div 
                    className={action === "Sign Up" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Sign Up")}
                >
                    Sign Up
                </div>
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>
            </div>
        </div>
      </div>
    );
}

export default LoginSignup;
