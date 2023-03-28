import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { TfiRulerAlt2 } from "react-icons/tfi";
import Image from "next/image";

const PropCard = ({ photo, price, property }) => {
  return (
    <div className="p-2 lg:p-0 min-w-[18rem] shadow-lg rounded-[5px]">
      <div className="relative">
        <img
          src={photo}
          className="lg:h-[220px] lg:w-[300] rounded-t-[5px]"
          alt="Property image"
        />
        <div className="absolute right-2 top-2 text-white text-[30px] hover:text-[#f9097d]">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="font-semibold text-[22px] p-3 my-2">
        <p>${price}</p>
        <p className="font-semibold text-[14px] flex items-center">
          <FaBath className="text-[14px] mr-1 text-[#f9097d]" />
          {property ? property.bathsFull : "0"}
          <span className="px-1 font-semibold text-[14px]"> ba </span>
          <FaBed className="text-[18px] mr-1 ml-1 text-[#f9097d]" />
          {property ? property.bedrooms : "0"}
          <span className="px-1"> hb </span>
          <TfiRulerAlt2 className="text-[16px] mr-1 ml-1 text-[#f9097d]" />
          {property ? property.area : "0"}
          <span className="px-1"> sqft</span>
        </p>
      </div>
    </div>
  );
};

export default PropCard;
