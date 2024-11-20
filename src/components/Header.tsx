import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import brandImage from "../assets/foodflow_2nd.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={brandImage} className="w-20 h-20 object-contain" alt="" />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="hidden lg:block">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
