import React from "react";
import { BiDesktop } from "react-icons/bi";
import { AiOutlineTablet, AiOutlineClose } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";

const Nav = () => {
  return (
    <>
      <div className="w-screen h-16 fixed  top-0 flex items-center bg-gray-800 z-40">
        <h1 className="text-lg text-white mx-2 p-3">
          {" "}
          <span className="text-red-500 text-bold text-3xl ">R</span>ado
          <span className="text-red-500 text-bold text-3xl ">S</span>hop
        </h1>
        <button className=" text-white  bg-slate-500 rounded px-2 mt-2  ">  Offers</button>
        <div className="flex justify-end items-center flex-1 mx-5 text-white  h-full px-4">
          <BiDesktop title="Desktop View"  className="navBtn"/>
          
          <AiOutlineTablet title="Tablet View" className="navBtn" />
          <BsPhone title="Mobile View"  className="navBtn"/>
          <SlBasket title="Sale Basket" className="navBtn" />
          <AiOutlineClose title="Close"  className="navBtn"/>
        </div>
      </div>
    </>
  );
};

export default Nav;
