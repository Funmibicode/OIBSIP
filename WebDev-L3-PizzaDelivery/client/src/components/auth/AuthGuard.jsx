import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";
import Loader from "../ui/Loader";

const AuthGuard = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
};

export default AuthGuard;