import React from "react";
import Image from "next/image";
import house from "../assets/bannerhome.jpg";
import { RiSearchLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="h-[31rem] flex">
      <div className="absolute w-full z-20 rounded">
        <div className="bg-black/40 absolute z-10 w-full h-[31rem]"></div>
        <Image src={house} className="h-[31rem] object-cover w-full" />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full justify-center">
        <p className="text-white text-[40px] font-bold text-center">
          <b className="text-[#f9097d]">P</b>ROPIEDADES{" "}
          <b className="text-[#f9097d]">F</b>INANCIAMIENTO{" "}
          <b className="text-[#f9097d]">S</b>ERVICIOS
        </p>
        <p className="text-white font-light text-[20px] text-center lg:text-[30px]">
          Lo acompañamos durante todo el proceso
        </p>
        <ul className="flex space-x-2 mt-10 rou">
          <button className="bg-transparent border rounded p-2 text-white  rounded- px-4 hover:bg-[#f9097d] duration-200">
            Usados
          </button>
          <button className="bg-transparent border rounded p-2 text-white  rounded- px-4 hover:bg-[#f9097d] duration-200">
            Nuevos
          </button>
          <button className="bg-transparent border rounded p-2 text-white  rounded- px-4 hover:bg-[#f9097d] duration-200">
            Rentar
          </button>
        </ul>
        <div className="mt-12 flex">
          <input
            type="search"
            className="bg-white py-4 w-[20rem] rounded-l pl-5 placeholder:text-gray-400 placeholder:text-[20px] lg:w-[32rem]"
            placeholder="Busca por ciudad, código postal, condado o dirección:"
          ></input>
          <div className="flex justify-center items-center w-16 h-16 rounded-r bg-[#f9097d] hover:bg-black duration-100">
            <RiSearchLine className="text-white text-[28px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
