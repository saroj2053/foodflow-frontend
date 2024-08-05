import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { LogOut, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import { useAuthStore } from "@/store/useAuthStore";

const MobileNav = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { clearUserAndToken } = useAuthStore();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Menu className="text-orange-500" size={32} />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome {user ? user.name : "to EzyEats."}.</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-3">
          <Link
            to="/"
            className="text-center font-semibold hover:text-orange-500 my-3"
          >
            Home
          </Link>
          <Link
            to="/allRestaurants"
            className="text-center font-semibold hover:text-orange-500 my-3"
          >
            Browse Restaurants
          </Link>
          {user ? (
            <>
              <Link
                to="/order"
                className="text-center font-semibold hover:text-orange-500 my-3"
              >
                Order Status
              </Link>
              <div className="flex gap-2 justify-center items-center cursor-pointer my-3">
                <img
                  className="w12 h-12 rounded-full"
                  src={user?.avatar}
                  alt="avatar"
                />
                <p className="hover:text-orange-600">{user?.email}</p>
              </div>
              <Button variant="destructive" onClick={() => clearUserAndToken()}>
                Log Out{" "}
                <span className="pl-1.5">
                  <LogOut />
                </span>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="flex-1 font-semibold"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button
                className="flex-1 font-semibold bg-orange-500 text-slate-100"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
