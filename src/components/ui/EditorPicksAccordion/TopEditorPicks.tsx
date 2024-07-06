
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TopEditorPicksProps {
  imageUrl: string;
  title: string;
  date: string;
  readMoreLink: string;
  readingTime: string; // New input for reading time
}

const TopEditorPicks: React.FC<TopEditorPicksProps> = ({
  imageUrl,
  title,
  date,
  readMoreLink,
  readingTime,
}) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="Editor Pic"
        className="rounded-md"
        width={661.39}
        height={369.32} // Adjusting height proportionally
      />
      <p className="text-2xl font-bold mt-5 text-left">{title}</p>
      <p className="text-gray-600 text-lg mt-3 text-left">
        {readingTime} <span className="ml-3 pl-3 border-l border-gray-300">{date}</span>
      </p>
      <div className="mt-5 flex items-center">
        <Link href={readMoreLink} className="text-blue-500 flex items-center text-left text-[14px]">
          <span className="mr-1">Read More</span>
          <Image src="/images/arrow-right.png" alt="Arrow Right" width={15} height={15} />
        </Link>
      </div>
    </div>
  );
};

export default TopEditorPicks;
