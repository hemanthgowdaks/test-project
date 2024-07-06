"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mb-[67px] sticky top-0 bg-white shadow-md z-10">
      <div className="w-full py-[10px] h-[67px] flex items-center justify-between px-4 md:px-0">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Millenial Dollar"
              className="mt-[2px]"
              width="220"
              height="20"
            />
          </Link>
          <ul className="hidden md:flex space-x-10 text-[16px] leading-[20px] font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/lists">Lists</Link>
            </li>
            <li>
              <Link href="/trending">Trending</Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center space-x-2">
            <img
              src="/images/phone-call.png"
              alt="phone-icon"
              className="w-[28px]"
              width="28"
              height="28"
            />
            <div>
              <p className="text-[12px] leading-[16px] font-medium uppercase">
                Need Help?
              </p>
              <h3 className="text-[18px] leading-[22px] font-bold">
                800 0000 0000
              </h3>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="dl-trigger"
              id="mobMenuBtn"
            >
              <SlMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2">
          <ul className="flex flex-col space-y-2 p-4">
            <li className="border-b border-gray-300 pb-2">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="border-b border-gray-300 pb-2">
              <Link href="/lists" onClick={() => setMenuOpen(false)}>
                Lists
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/trending" onClick={() => setMenuOpen(false)}>
                Trending
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
