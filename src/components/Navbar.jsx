import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import logo from "../assets/pfslogo.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const { push } = useRouter();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 border-b-2  shadow-lg mb-5">
      <div className="lg:hidden">
        <FiMenu className="w-7 h-7" />
      </div>
      <div className="">
        <div className="">
          <Link href="/">
            <Image
              src={logo}
              width="320px"
              className="w-36"
              alt="PSR Realty Logo"
            />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex space-x-6 py-4">
          <li>
            <button
              onClick={() => push("/propiedades")}
              className="hover:border-b-2 border-[#f9097d]"
            >
              PROPIEDADES
            </button>
          </li>
          <li>
            <button
              onClick={() => push("/financiamiento")}
              className="hover:border-b-2 border-[#f9097d]"
            >
              FINANCIAMIENTO
            </button>
          </li>
          <li>
            <button
              onClick={() => push("/servicios")}
              className="hover:border-b-2 border-[#f9097d]"
            >
              SERVICIOS
            </button>
          </li>
          <li>
            <button
              onClick={() => push("/renta en dólares")}
              className="hover:border-b-2 border-[#f9097d]"
            >
              RENTA EN DÓLARES
            </button>
          </li>
          <li>
            <button
              onClick={() => push("/nosotros")}
              className="hover:border-b-2 border-[#f9097d]"
            >
              NOSOTROS
            </button>
          </li>
          <li>
            <button
              onClick={() => push("/blog")}
              className="hover:border-b-2 border-[#f9097d]"
            >
              BLOG
            </button>
          </li>
          <li>
            <button
              onClick={() => push("/contacto")}
              className="hover:border-b-2 border-[#f9097d]"
            >
              CONTACTO
            </button>
          </li>
        </ul>
      </div>

      <div className="w-10 h-10 bg-[#f9097d] rounded-full text-white flex items-center justify-center lg:hidden">
        <HiOutlineUser className="text-[28px]" />
      </div>

      <div
        onClick={() => push("/login")}
        className="hidden lg:flex bg-[#f9097d] p-2 text-white rounded-full px-4 font-bold hover:bg-black"
      >
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
