import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import {
  Container,
  House,
  LogIn,
  LogOut,
  Store,
  User
} from "lucide-react";
import { useLogout } from "@/api/authAPI";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const MainNav = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const { logoutUser } = useLogout();

  const handleLogout = () => {
    logoutUser();
  };
  return (
    <div className="flex gap-8 items-center font-semibold dark:text-white text-sm">
      <Link
        to="/"
        className="flex flex-col items-center justify-center gap-1 font-semibold hover:text-orange-500 my-3"
      >
        <House size={20} />
        Home
      </Link>
      <Link
        to="/allRestaurants"
        className="flex flex-col items-center justify-center gap-1 font-semibold hover:text-orange-500 my-3"
      >
        <Store size={20} />
        Browse Restaurants
      </Link>
      {user ? (
        <>
          <Link
            to="/order"
            className="flex flex-col items-center justify-center gap-1 font-semibold hover:text-orange-500 my-3"
          >
            <Container size={20} />
            Order Status
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex  justify-center items-center cursor-pointer my-3">
                <img
                  className="w12 h-12 rounded-full"
                  src={user?.avatar}
                  alt="avatar"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => navigate("/user-profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/manage-restaurant")}
                >
                  <Store className="mr-2 h-4 w-4" />
                  <span>My Restaurant</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="bg-red-500 text-white"
              >
                <Link to="/" className="flex items-center w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="flex flex-col items-center justify-center font-semibold text-md hover:text-orange-500"
          >
            <span>
              <LogIn size={20} />
            </span>
            Login/Signup
          </Link>
          
        </>
      )}
    </div>
  );
};

export default MainNav;
