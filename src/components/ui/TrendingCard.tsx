import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface TrendingCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string; // New prop for the link destination
}

const TrendingCard: FC<TrendingCardProps> = ({ imageUrl, title, description, buttonText, buttonLink }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
        <Image src={imageUrl} alt="card-image" className="object-cover w-full h-full" layout="fill" />
      </div>
      <div className="p-6">
        <p className="font-bold text-[20px] leading-[28px] text-left text-blue-gray-900">
          {title}
        </p>
        <p className="text-sm font-normal leading-normal text-left text-gray-700 opacity-75">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0 text-left">
        <Link href={buttonLink}>
          <button
            className="align-middle font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white text-blue-gray-900 shadow-md hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg active:scale-100"
            type="button"
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TrendingCard;

