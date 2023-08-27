import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

export const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.from ? location.state.from : '/';

    const handleLogin = () => {
        login(username)
        // replace set to "true" make it impossible for user
        //  to go back to the login page when the back button is clicked
        navigate(redirectPath, { replace: true })
    }


    return (
        <div>
            <h2>Login Page</h2>
            <label htmlFor="username">Username</label> &nbsp;
            <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} /> &nbsp;
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

