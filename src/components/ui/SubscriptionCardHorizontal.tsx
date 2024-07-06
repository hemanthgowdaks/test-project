import Image from "next/image";
import React from "react";

const SubscriptionCardHorizontal: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 bg-[#DDF7F7] rounded-[10px] text-black relative overflow-hidden w-full max-w-[1170px] mx-auto">
      <div className="flex-grow text-left mb-4 lg:mb-0">
        <div className="text-[24px] leading-[30px] font-bold">
          <p>
            Get Daily Tips On
            <br /> Making & Saving Money
          </p>
        </div>
        <div className="text-[16px] leading-[22px] mt-2">
          <p>
            Get daily advice from experts & start your journey towards financial
            freedom.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
        <input
          type="text"
          placeholder="Enter E-Mail Address"
          className="border border-[#d5d5d5] p-3 bg-white appearance-none outline-none rounded-[6px] w-full lg:w-auto h-[55px] text-[16px]"
        />
        <button className="bg-[#04d36f] text-white font-bold shadow-[0px 4px 10px 1px rgba(0, 0, 0, 0.1)] appearance-none outline-none rounded-[6px] w-full lg:w-[158px] h-[55px] text-[16px]">
          Sign Up
        </button>
      </div>
      <Image
        src="/images/email.png" // Update this path
        alt="Envelope"
        className="absolute right-[-15px] top-[-15px] lg:right-[calc(50%-50px)] lg:top-[-15px] w-[100px] h-[82px] opacity-20"
        width={100}
        height={82}
      />
    </div>
  );
};

export default SubscriptionCardHorizontal;
