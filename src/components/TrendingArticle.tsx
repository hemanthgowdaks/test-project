import React, { FC } from "react";
import Image from "next/image";

interface TrendingArticleProps {
  articleNumber: number;
  title: string;
  imageUrl: string;
//   paragraph: string;
  paragraph: React.ReactNode;

}

const TrendingArticle: FC<TrendingArticleProps> = ({
  articleNumber,
  imageUrl,
  title,
  paragraph,
}) => {
  return (
    <div className="flex flex-col w-[737px]">
      {/* article Header */}
      <div className="flex flex-row w-full">
        <div className="text-3xl text-[#00A2FF] font-bold mr-3.5 text-center">
          #{articleNumber}
        </div>
        <p className="text-slate-300 mr-3.5 mt-1.5">|</p>
        <div className="text-3xl font-bold">
          <p>{title}</p>
        </div>
      </div>

      <div className="bg-[#fff] p-[3px] max-w-full rounded-xl mt-6 mx-auto mb-2.5 border border-solid drop-shadow-lg">
        <Image
          src={imageUrl}
          alt="article image"
          width={737}
          height={436}
          className="flex justify-center items-center rounded-xl"
        />
      </div>

      <p className="mt-5 leading-6 text-base text-left max-w-full">
        {paragraph}
      </p>

      <div></div>
    </div>
  );
};

export default TrendingArticle;
