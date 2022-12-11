import Image from "next/image";
import React from "react";
import {
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

function Footer() {
  return (
    <div className="grid grid-cols-4 bg-pink-50 border m-3 shadow-lg rounded-md px-5 py-2 h-[400px]">
      <div className="col-span-1 flex justify-center space-x-1 items-center  ">
        <Image width={50} height={50} alt="" src="/image/facebook.png" />
        <Image width={50} height={50} alt="" src="/image/twitter1.png" />
        <Image width={50} height={50} alt="" src="/image/pinterest.png" />
      </div>
      <div className="col-span-1 flex-col space-y-3 h-[300px] mt-10 flex justify-center ">
        <p className=" text-2xl font-thin uppercase">Information</p>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p className=" text-sm">About us</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>My Account</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>Customer Service</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>Order History</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>Order Tracking</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>Shipping & Delivery</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>Blog</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>Privacy</p>
        </div>
        <div className=" flex justify-start text-sm font-bold items-center ">
          <ChevronRightIcon className=" w-4 font-bold h-5" />
          <p>Terms And Condition</p>
        </div>
      </div>

      <div className="col-span-1 flex-col space-y-3 h-[300px] flex justify-center ">
        <h1 className=" text-2xl font-thin uppercase">CONTACT INFORMATION</h1>
        <p className=" text-sm flex justify-start items-center">
          <MapPinIcon className="w-5 h-5 mr-2" />
          Address
        </p>
        <p className=" flex justify-center w-[200px] ml-4 items-center font-bold text-xs">
          Printasia.in, 101, Vishnu Building, Rajbhavan Road, Hyderabad ,
          Telangana 500082
        </p>
        <p className=" text-sm flex justify-start items-center">
          <PhoneIcon className="w-5 h-5 mr-2" />
          Phone
        </p>
        <p className=" flex justify-center w-[200px]  items-center font-bold text-xs">
          +917842302947
        </p>
        <p className=" text-sm flex justify-start items-center">
          <EnvelopeIcon className="w-5 h-5 mr-2" />
          Email
        </p>
        <p className=" flex justify-center w-[200px]  items-center font-bold text-xs">
          print@printasia.in
        </p>
      </div>
    </div>
  );
}

export default Footer;
