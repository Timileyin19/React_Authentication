import { useAuth } from "../context/auth";
import { useLocation, Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};

export default ProtectRoute;
