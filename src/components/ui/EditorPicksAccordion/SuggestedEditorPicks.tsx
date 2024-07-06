import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SuggestedEditorPicksProps {
  imageUrl: string;
  title: string;
  location: string;
  date: string;
}

const SuggestedEditorPicks: React.FC<SuggestedEditorPicksProps> = ({
  imageUrl,
  title,
  location,
  date,
}) => {
  return (
    <Link href="#">
      <div className="flex w-full md:w-[312.3px] h-[92.51px]">
        <div className="w-[149px] h-full">
          <Image
            src={imageUrl}
            alt={title}
            className="rounded-md"
            width={149}
            height={101}
          />
        </div>
        <div className="ml-3 flex flex-col justify-center text-left w-[163.3px] h-full">
          <p className="text-[15px] leading-[21px] font-bold">
            {title}
          </p>
          <p className="text-[13px] leading-[19px] text-gray-600 mt-[10px]">
            {location}
            <br />
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SuggestedEditorPicks;
