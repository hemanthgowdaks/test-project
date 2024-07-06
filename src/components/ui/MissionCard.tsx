// import Image from 'next/image';
// import { FC } from 'react';

// interface MissionCardProps {
//   logoUrl: string;
//   title: string;
//   description: string;
// }

// const MissionCard: FC<MissionCardProps> = ({ logoUrl, title, description }) => {
//   return (
//     <div className="relative w-[31.5%] p-8 text-left bg-[#f6f8fe] rounded-lg shadow-[0_5px_10px_0_rgba(0,0,0,0.1)]">
//       <Image src={logoUrl} alt="logo" width={70} height={70} className="block mb-6" />
//       <h3 className="text-[24px] leading-[30px] font-bold text-[#010233]">
//         {title}
//       </h3>
//       <p className="text-[15px] leading-[23px] font-medium text-[#2d2d2d] mt-4">
//         {description}
//       </p>
//     </div>
//   );
// }

// export default MissionCard;

import Image from "next/image";
import { FC } from "react";

interface MissionCardProps {
  logoUrl: string;
  title: string;
  description: string;
}

const MissionCard: FC<MissionCardProps> = ({ logoUrl, title, description }) => {
  return (
    <div className="relative w-[368.54px] h-[343.56px] p-8 text-left bg-[#f6f8fe] rounded-lg shadow-[0_5px_10px_0_rgba(0,0,0,0.1)] flex flex-col justify-start">
      <Image src={logoUrl} alt="logo" width={70} height={70} className="mb-6" />
      <h3 className="text-[24px] leading-[30px] font-bold text-[#010233]">
        {title}
      </h3>
      <p className="text-[15px] leading-[23px] font-medium text-[#2d2d2d] mt-4">
        {description}
      </p>
    </div>
  );
};

export default MissionCard;
