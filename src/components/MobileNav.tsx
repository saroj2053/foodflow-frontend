import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Container, House, LogOut, Menu, Store, User } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import { useAuthStore } from "@/store/useAuthStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
            className="flex flex-col items-center justify-center gap-1 font-semibold hover:text-orange-500 my-3"
          >
            <House />
            Home
          </Link>
          <Link
            to="/allRestaurants"
            className="flex flex-col items-center justify-center gap-1 font-semibold hover:text-orange-500 my-3"
          >
            <Store />
            Browse Restaurants
          </Link>
          {user ? (
            <>
              <Link
                to="/order"
                className="flex flex-col items-center justify-center gap-1 font-semibold hover:text-orange-500 my-3"
              >
                <Container />
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
                    onClick={() => clearUserAndToken()}
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
