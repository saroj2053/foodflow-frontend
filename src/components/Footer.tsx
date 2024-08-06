import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-stone-100 py-4 ">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row justify-between items-center">
        <span className="text-4xl  font-bold tracking-normal">
          Ezy Eats
          <span className="text-4xl font-bold text-orange-600">.</span>
        </span>
        <span className="font-semibold text-md text-center">
          &copy; 2024 <span className="text-orange-600">Saroj Sah</span> | All
          rights reserved
        </span>
        <span className="flex gap-4">
          <span className=" rounded-full w-8 h-8 flex justify-center items-center hover:bg-orange-500 hover:text-white">
            <Facebook size={15} />
          </span>
          <span className="rounded-full w-8 h-8 flex justify-center items-center hover:bg-orange-500 hover:text-white">
            <Twitter size={15} />
          </span>
          <span className="rounded-full w-8 h-8 flex justify-center items-center hover:bg-orange-500 hover:text-white">
            <Youtube size={15} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
