import Link from 'next/link';
import { FC } from 'react';

interface SquareBadgeCardProps {
  imageUrl: string;
  link: string; 
}

const SquareBadgeCard: FC<SquareBadgeCardProps> = ({ imageUrl, link }) => {
  return (
    <Link href={link}>
      <div className="block w-11/25 border border-gray-300 rounded-md bg-white mx-auto my-4 p-5 transition-transform duration-500 ease-in-out hover:shadow-lg hover:scale-105">
        <img src={imageUrl} alt="card-image" className="mx-auto" />
      </div>
    </Link>
  );
}

export default SquareBadgeCard;




