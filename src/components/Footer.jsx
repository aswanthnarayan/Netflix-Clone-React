import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1a1919] p-[30px 4%] max-w-screen flex flex-col gap-5 items-center px-3 pt-7 pb-9">
      <div className="flex gap-[20px]">
        <FaXTwitter size={30} />
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaYoutube size={30} />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4  gap-x-8 gap-y-2 ">
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p> &copy; 1997-2023 Netflix, Inc. </p>
    </div>
  );
};

export default Footer;
