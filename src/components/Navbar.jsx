import React from "react";
import { gtrImg, bagImg, searchImg } from "../Utils";
import './../../src/index.css'
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-12 mx-12 px-5 flex justify-between items-center ">
      <nav className="flex w-full scr-mx-w">
        <img src={gtrImg} alt="" width={25} height={15} />
      
      <div className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((nav, i) => (
          <div key={nav} className=" cursor-pointer text-sm text-gray-500 px-5 hover:text-white transition-all">{nav}</div>
        ))}
      </div>
      <div className="flex items-baseline gap-8 max-sm:justify-end max-sm:flex-1 ">
        <img src={searchImg} alt="" width={15} height={15}  />
        <img src={bagImg} alt="" width={15} height={15} />
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
