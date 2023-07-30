import React from "react";
import { BiDesktop } from "react-icons/bi";
import {
  AiOutlineTablet,
  AiOutlineClose,
  AiOutlineMail,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineLogin,
  AiFillPhone,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="flex flex-col w-screen bg-gray-800 text-white text-lg justfify-center items-center my-5 pb-3 pt-10">
      <div className="flex justify-between w-[70%]  my-2 py-2">
        <div className="space-y-5">
          <h1 className="font-bold text-xl ">
            {" "}
            <span className="text-red-500 text-bold text-3xl ">R</span>ado
            <span className="text-red-500 text-bold text-3xl ">S</span>hop
          </h1>
          <p>Phone: 09373765646</p>
          <p className="">mohammadreza.osfuri@gmail.com</p>
          <div className="flex">
            <AiFillTwitterSquare className="text-2xl mx-1" />
            <AiFillFacebook className="text-2xl mx-1" />
            <AiFillLinkedin className="text-2xl mx-1" />
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-xl">Information</h1>
          <p>Abot Us</p>
          <p>Contact</p>
          <p>Checkout</p>
          <p>Services</p>
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-xl">My Account</h1>
          <p>My Account</p>
          <p>Contact</p>
          <p>Shop</p>
          <p>Shpping Cart</p>
        </div>
        <div className=" flex flex-col space-y-5 mx-5">
          <h1 className="font-bold text-xl">Join Our Newsletter Now</h1>
          <p className="flex-1">Get E-mail updates about our latest shop and special offers.</p>
          <div className="flex   ">
            <input
              className="w-full "
              type="text"
              placeholder="search here ..."
            />
            <div className="bg-orange-400 centerBox h-full">Subscribe</div>
          </div>
        </div>
      </div>
      <div className="flex text-lg my-5 bg-gray-600 ">
        <p> This website is made with by mrezaosfoori</p>
        
      </div>
    </div>
  );
};

export default Footer;
