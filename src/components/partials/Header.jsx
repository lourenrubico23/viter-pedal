import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-between items-center py-2">
        <div className="flex gap-2 items-center py-3">
          <FaAngleDoubleUp className="text-accent size-4 lg:size-5" />
          <h1 className="text-sm lg:text-[25px]">Pedal</h1>
        </div>
        <nav>
          <ul className="flex gap-5 text-dark cursor-pointer text-[14px] font-bold">
            <li className="hover:text-accent">Home</li>
            <li className="hover:text-accent">Products</li>
            <li className="hover:text-accent">Community</li>
            <li className="hover:text-accent">Support</li>
          </ul>                 
        </nav>
      </div>
    </div>
  );
};

export default Header;
