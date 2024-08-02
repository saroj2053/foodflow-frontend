import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Menu className="text-orange-500" size={32} />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to EzyEats.</span>
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
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
