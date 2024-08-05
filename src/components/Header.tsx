import { Link, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { Utensils } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Utensils className="text-white" />
          </div>
          <h2 className=" text-4xl font-bold text-orange-500">
            Ezy<span className="text-slate-800">Eats.</span>
          </h2>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="hidden lg:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
