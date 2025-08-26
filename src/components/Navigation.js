import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full shadow-md bg-white/80 backdrop-blur-md animate-radialBg">
      <div className="flex justify-between items-center h-16 px-6 md:px-12">
        {/* Logo */}
        <motion.h1
          onClick={() => navigate("/")}
          className="text-xl md:text-2xl font-extrabold cursor-pointer tracking-tight text-gray-800"
        >
          Get Into Compliance
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className="relative cursor-pointer px-3 py-2 transition duration-300 rounded-md hover:text-green-600 hover:bg-gray-100"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop Button (hidden on mobile) */}
        <button
          onClick={() => navigate("/contact", { state: { scrollToContact: true } })}
          className="hidden md:block cursor-pointer transition duration-300 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
        >
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-inner">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className="block w-full text-center py-2 text-gray-700 hover:text-green-600 hover:bg-gray-100 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
