import React from "react";
import {
  PhoneIcon,
  HomeIcon,
  UserMinusIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

function Header() {
  return (
    <div className="p-2 h-[80px] flex justify-between bg-gradient-to-b from-pink-500 to-white items-center">
      <div className=" flex justify-center items-center  space-x-3">
        <div className="bg-white p-2 rounded-full">
          <PhoneIcon className="w-6 h-6 text-pink-600" />
        </div>
        <div className="flex space-y-1 justify-center flex-col">
          <p className="text-xs font-bold font-sans">
            CALL NOW: +91 78423 02947
          </p>
          <h1 className="text-[10px] font-extrabold text-black">
            CODE: BOUNCEBACK(20% OFF)
            <p className="text-[10px] font-extrabold text-black">
              & FREE DELIVERY.
            </p>
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2">
        <div className="w-[200px] cursor-pointer ease-out duration-300 hover:scale-105 ">
          <Image
            width={200}
            height={100}
            className="rounded-lg"
            src="/image/logo.png"
            alt=""
          />
        </div>
      </div>

      <div className=" flex justify-center items-center p-2 space-x-3">
        <button className="text-sm font-bold flex items-center bg-pink-600 shadow-lg rounded-md p-2 text-white ">
          <UserIcon className="w-5 h-5 font-bold mr-1" />
          Sign In
        </button>
        <button className="text-sm font-bold flex items-center bg-pink-600 shadow-lg rounded-md p-2 text-white ">
          <UserPlusIcon className="w-5 h-5 font-bold mr-1" />
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Header;
