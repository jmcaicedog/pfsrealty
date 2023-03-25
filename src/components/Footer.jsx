import React from "react";
import logo from "../assets/pfslogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex text-center justify-center w-full py-8">
      <div className="flex justify-center flex-col">
        <Image src={logo} className="" alt="PFS Realty Logo" />
        <p className="flex text-center justify-center">
          Copyright © 2023 PFS Realty Group
        </p>
      </div>
    </div>
  );
};

export default Footer;
