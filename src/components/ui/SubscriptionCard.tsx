import Image from 'next/image';
import React from 'react';

const SubscriptionCard: React.FC = () => {
  return (
    <div className="float-left w-full p-6 bg-[#DDF7F7] rounded-[10px] text-black relative overflow-hidden" style={{ height: '316px', width: '362.69px' }}>
      <div className="text-left text-2xl font-bold">
        <p>Get Daily Tips On<br /> Making & Saving Money</p>
      </div>
      <div className="text-left text-[16px] leading-[22px] mt-4">
        <p>Get daily advice from experts & start your journey towards financial freedom.</p>
      </div>
      <Image 
        src="/images/email.png" 
        alt="Envelope"
        className="absolute right-[-15px] top-[-15px] w-[100px] h-[82px] opacity-20"
        width={100}
        height={82}
      />
      <input 
        type="text"
        placeholder="Enter E-Mail Address"
        className="border border-[#d5d5d5] mt-6 p-3 bg-white appearance-none outline-none rounded-[6px] w-full h-[55px] text-[16px]"
      />
      <button 
        className="bg-[#04d36f] text-white mt-3 font-bold shadow-[0px 4px 10px 1px rgba(0, 0, 0, 0.1)] appearance-none outline-none rounded-[6px] w-full h-[55px] text-[16px]"
      >
        Sign Up
      </button>
    </div>
  );
}

export default SubscriptionCard;


