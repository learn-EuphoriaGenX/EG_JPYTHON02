import React from "react";

import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaShoppingCart as Shp } from "react-icons/fa";
import { logo } from "../../config/icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Furniro" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-black">Furniro</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium text-black">
          <Link to="/"><span className="cursor-pointer hover:text-gray-500">Home</span></Link>
          <Link to="/shop"><span className="cursor-pointer hover:text-gray-500">Shop</span></Link>
          <Link to="/about"><span className="cursor-pointer hover:text-gray-500">About</span></Link>
          <Link to="/contact"><span className="cursor-pointer hover:text-gray-500">Contact</span></Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-black">
          <Link to="/login"><MdOutlineAccountCircle className="cursor-pointer hover:text-gray-500" /></Link>
          <IoIosSearch className="cursor-pointer hover:text-gray-500" />
          <FaRegHeart className="cursor-pointer hover:text-gray-500" />
          <Shp className="cursor-pointer hover:text-gray-500" />
        </div>
      </div>
    </header>
  );
}

export default Header;
