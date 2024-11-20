import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import footerBrandImg from "../assets/foodflow.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  partners: [
    { name: "Become a Partner", href: "#" },
    { name: "For Restaurants", href: "#" },
    { name: "For Drivers", href: "#" },
    { name: "Partner Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: <FaFacebookF className="h-5 w-5" />, href: "#" },
  { icon: <FaXTwitter className="h-5 w-5" />, href: "#" },
  { icon: <FaYoutube className="h-5 w-5" />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2"> 
            <Link to="/">
              <img
                src={footerBrandImg}
                className="w-24 h-24 object-contain"
                alt=""
              />
            </Link>
            <p className="mt-4 text-gray-400">
              Delivering happiness to your doorstep. Order your favorite meals
              from the best restaurants in town.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold mb-3">
                Subscribe to our newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-md hover:bg-orange-700 flex items-center">
                  <IoIosSend className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              {footerLinks.partners.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400">
                © {new Date().getFullYear()} FoodFlow. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
