import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h2 className=" text-4xl font-bold text-slate-800">
            Ezy Eats
            <span className="text-orange-500 font-bold text-4xl">.</span>
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
