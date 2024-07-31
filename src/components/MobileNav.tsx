import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const MobileNav = () => {
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
          <Link to="/about" className="text-center hover:text-orange-500 my-3">
            About
          </Link>
          <Link
            to="/contact"
            className="text-center hover:text-orange-500 my-3"
          >
            Contact
          </Link>
          <Button variant="ghost" className="flex-1 ">
            Log In
          </Button>
          <Button className="flex-1 font-bold bg-orange-500 text-slate-100">
            Sign Up
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
