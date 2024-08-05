import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthStore } from "./store/useAuthStore";

const AppRoutes = () => {
  const { user, token } = useAuthStore();
  console.log("user:", user);
  console.log("token:", token);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user-profile" element={<h1>USER PROFILE PAGE</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
