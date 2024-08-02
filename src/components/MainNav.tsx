import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const MainNav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-8 items-center font-semibold text-slate-700 text-md">
      <Link to="/" className="hover:text-orange-500">
        Home
      </Link>
      <Link to="/allRestaurants" className="hover:text-orange-500">
        Browse Restaurants
      </Link>
      <Button
        variant="ghost"
        className="font-semibold text-md"
        onClick={() => navigate("/login")}
      >
        Log In
      </Button>
      <Link
        to="/signup"
        className="bg-orange-500 px-4 py-1 text-white rounded-md hover:bg-orange-600"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default MainNav;
