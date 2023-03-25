import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import logo from "../assets/pfslogo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-4 border-b-2  shadow-lg mb-5">
      <div className="lg:hidden">
        <FiMenu className="w-7 h-7" />
      </div>
      <div className="">
        <div className="">
          <Image
            src={logo}
            width="320px"
            className="w-36"
            alt="PSR Realty Logo"
          />
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex space-x-6 py-4">
          <li>
            <button className="hover:border-b-2 border-[#f9097d]">
              PROPIEDADES
            </button>
          </li>
          <li>
            <button className="hover:border-b-2 border-[#f9097d]">
              FINANCIAMIENTO
            </button>
          </li>
          <li>
            <button className="hover:border-b-2 border-[#f9097d]">
              SERVICIOS
            </button>
          </li>
          <li>
            <button className="hover:border-b-2 border-[#f9097d]">
              RENTA EN DÓLARES
            </button>
          </li>
          <li>
            <button className="hover:border-b-2 border-[#f9097d]">
              NOSOTROS
            </button>
          </li>
          <li>
            <button className="hover:border-b-2 border-[#f9097d]">BLOG</button>
          </li>
          <li>
            <button className="hover:border-b-2 border-[#f9097d]">
              CONTACTO
            </button>
          </li>
        </ul>
      </div>

      <div className="w-10 h-10 bg-[#f9097d] rounded-full text-white flex items-center justify-center lg:hidden">
        <HiOutlineUser className="text-[28px]" />
      </div>

      <div className="hidden lg:flex bg-[#f9097d] p-2 text-white rounded-full px-4 font-bold hover:bg-black">
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
