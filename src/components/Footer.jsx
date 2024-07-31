import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-12 px-7">
      <div className="scr-mx-w">
        <div>
          <p className="font-semibold text-gray-500 text-xs">
            Discover the ultimate driving experience at our {""}
            <span className="underline text-blue">GTR Dealership</span>,
            {""} your premier destination for high-performance vehicles.
            Whether you’re looking for cutting-edge technology, 
            luxury, or speed, {""}
            <span className="underline text-blue">in your area</span>,
            our expert team is here to help you find the perfect GTR car.
          </p>
          <p className="font-semibold text-gray-500 text-xs">
            Call us at 00963968643988 for more information or to schedule a test drive.
          </p>
        </div>
        <div className="bg-neutral-800 w-full my-5 h-[3px]"></div>
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray-500 text-xs">
            © 2024-2025 GTR Inc. All rights reserved.
          </p>
        </div>
        <div className="flex">
          {footerLinks.map((link, i) => (
            <p key={link} className="font-semibold text-gray-500 text-xs">
              {link}
              {i !== footerLinks.length - 1 && <span className="mx-2">|</span>}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
