import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { useLogout } from "@/api/authAPI";

const MainNav = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const { logoutUser } = useLogout();

  const handleLogout = () => {
    logoutUser();
  };
  return (
    <div className="flex gap-8 items-center font-semibold text-slate-700 text-md">
      <Link to="/" className="hover:text-orange-500">
        Home
      </Link>
      <Link to="/allRestaurants" className="hover:text-orange-500">
        Browse Restaurants
      </Link>
      {user ? (
        <>
          <Link to="/order">Order Status</Link>
          <div className="flex gap-2 items-center cursor-pointer">
            <img
              className="w12 h-12 rounded-full"
              src={user?.avatar}
              alt="avatar"
            />
            <p className="hover:text-orange-600">{user?.email}</p>
          </div>
          <Button variant="destructive" onClick={handleLogout}>
            Log Out{" "}
            <span className="pl-1.5">
              <LogOut />
            </span>
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outline"
            className="font-semibold text-md"
            onClick={() => navigate("/login")}
          >
            Log In{" "}
            <span className="pl-1.5">
              <LogIn />
            </span>
          </Button>
          <Link
            to="/signup"
            className="flex gap-2 items-center bg-orange-500 px-4 py-1.5 text-white rounded-md hover:bg-orange-600"
          >
            Sign Up <UserPlus />
          </Link>
        </>
      )}
    </div>
  );
};

export default MainNav;
