import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/signin" />;
}

export function AdminRoute({ children }) {
  const { currentUser, userRole } = useAuth();
  if (!currentUser) return <Navigate to="/admin-login" />;
  if (userRole !== "admin") return <Navigate to="/" />;
  return children;
}

export function GuestRoute({ children }) {
  const { currentUser, userRole } = useAuth();
  if (currentUser) {
    return userRole === "admin" ? <Navigate to="/admin-dashboard" /> : <Navigate to="/dashboard" />;
  }
  return children;
}
