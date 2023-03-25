import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";

const PropCard = ({ photo, price }) => {
  return (
    <div className="min-w-[18rem] shadow-lg rounded-[5px]">
      <div className="relative">
        <img
          src={photo}
          className="h-[220px] w-[300] rounded-t-[5px]"
          alt="Property image"
        />
        <div className="absolute right-2 top-2 text-white text-[30px] hover:text-[#f9097d]">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="font-semibold text-[22px] p-2">
        <p>{price}</p>
        <p>
          <span>5</span>ba
        </p>
      </div>
    </div>
  );
};

export default PropCard;
