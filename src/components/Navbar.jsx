import React from "react";
import logo from "../assets/logoo.png";
import { CiSearch } from "react-icons/ci";
import { FaRegBell, FaCaretDown } from "react-icons/fa";
import { LogoutDropDown } from "./LogoutDropDown";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-between items-center py-5 px-[6%] bg-base-bg text-white fixed z-50">
      <div className="left flex items-center gap-2">
        <img src={logo} alt="" className="w-24" />
        <ul className="hidden  md:flex items-center md:text-sm lg:text-lg gap-2">
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My Lists</li>
          <li>My Lists</li>
        </ul>
      </div>
      <div className="rigt flex items-center gap-2">
        <CiSearch />
        <p>Children</p>
        <FaRegBell />
        <LogoutDropDown />
        <FaCaretDown />
      </div>
    </div>
  );
};

export default Navbar;
