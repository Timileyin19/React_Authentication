import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav>
            <NavLink to="/" className="me-2">Home</NavLink>
            <NavLink to="/profile" className="me-2">Profile</NavLink>
            { !user && (
            <NavLink to="/login" className="me-2">Login</NavLink>
            ) }
        </nav>
    )
}

export default Navbar;