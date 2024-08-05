import { useAuthStore } from "@/store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, token } = useAuthStore();

  return user || token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
