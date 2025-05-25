import { useState } from "react";
import { Menu } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e293b] text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/">
          <div className="font-poppins text-4xl font-semibold cursor-pointer select-none">
              Sajid
        </div>
        </NavLink>
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg list-none">

          <NavLink to="/">
              <li className="hover:text-indigo-400 cursor-pointer transition">Home</li>
          </NavLink>
          <li className="hover:text-indigo-400 cursor-pointer transition">Contact</li>
          <NavLink to="/projects">
              <li className="hover:text-indigo-400 cursor-pointer transition">Projects</li>
          </NavLink>
          
          <li className="hover:text-indigo-400 cursor-pointer transition">Resume</li>
          
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden cursor-pointer select-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* Using text as hamburger placeholder for now */}
          <span className="text-xl font-semibold"><Menu/></span>
        </div>
      </div>

      {/* Mobile Menu (text only links) */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col bg-[#1e293b] px-6 pb-6 gap-4 text-lg list-none">
          <NavLink to="/">
          <li className="hover:text-indigo-400 cursor-pointer transition">Home</li>
          </NavLink>
          <li className="hover:text-indigo-400 cursor-pointer transition">Contact</li>
          <NavLink to="/projects">
          <li className="hover:text-indigo-400 cursor-pointer transition">Projects</li>
          </NavLink>
          <li className="hover:text-indigo-400 cursor-pointer transition">Resume</li>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
