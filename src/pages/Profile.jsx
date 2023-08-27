import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth"

export const Profile = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div>
            Hello {user}!
            <br />
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

