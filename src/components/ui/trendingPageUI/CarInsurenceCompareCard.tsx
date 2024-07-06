import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoShieldLock } from "react-icons/go";

function CarInsurenceCompareCard() {
  return (
    <div>
      <div className="w-[354.94px] h-[351.19px] bg-[#DDF7F7] p-6 rounded-xl">
        <p className="text-2xl font-bold leading-[30px]">
          Compare car insurance rates in your area!
        </p>
        <p className="text-base px-1 leading-5 mt-4">
          See if you qualify for a lower rate in less than 2 minutes
        </p>
        <input
          type="text"
          placeholder="Enter Zip Code"
          className="border border-[#d5d5d5] mt-6 p-3 bg-white appearance-none outline-none rounded-[6px] w-full h-[55px] text-[16px]"
        />
        <button className="bg-[#04d36f] text-white text-lg text-center mt-3.5 font-bold shadow-[0px 4px 10px 1px rgba(0, 0, 0, 0.1)] appearance-none outline-none rounded-[6px] w-full h-[55px] text-[16px]">
          Check Rates
          <IoIosArrowForward className="inline ml-1 font-bold text-xl" />
        </button>
        <p className="text-base mt-3.5 text-center">
          <GoShieldLock className="inline-block mr-1.5 mb-1 h-5 w-5" />
          FAST, EASY & FREE
        </p>
      </div>
    </div>
  );
}

export default CarInsurenceCompareCard;


