"use client"
import React from "react";
import { useState } from "react";

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

const Header = () => {
  const [nav, setnav] = useState(true)
  const hanleNav=()=>{
    setnav(!nav)
  }
  return (
    <>
      <div className=" w-screen  ">
        <div className="mt-16  ">
          {/* first       */}
          <div className="flex h-24  items-center">
            <div className="w-1/4 flex justify-end items-center">
              <AiOutlineMail className="text-2xl mx-1" />

              <p className="">mohammadreza.osfuri@gmail.com</p>
            </div>
            <div className="w-1/2 flex mx-2 ">
              <div className="flex flex-1">
                <AiFillPhone className="text-2xl mx-1" />
                <p>09373765646</p>
              </div>
              <div className="flex">
                <AiFillTwitterSquare className="text-2xl mx-1" />
                <AiFillFacebook className="text-2xl mx-1" />
                <AiFillLinkedin className="text-2xl mx-1" />
              </div>
            </div>
            <div className="w-1/4 flex ">
              <div className="w-1/3 ">
                <form action="">
                  <select className="w-4/5 pr-4 border" name="" id="">
                    <option value="English">English</option>
                    <option value="Persian">Persian</option>
                  </select>
                </form>
              </div>
              <div className="flex items-center">
                <AiOutlineLogin className="text-2xl mx-1" />
                <p>login</p>
              </div>
            </div>
          </div>
        </div>
        {/* second       */}
        <div className=" flex w-screen h-40 justify-between items-center ">
          <div className="  flex-1  ">
            <h1 className="text-xl font-semibold font-italic text-end mr-5 ">
              best prices
            </h1>
          </div>
          <div className=" flex flex-[2_2_0%] h-16 items-center border ">
            <div className="px-2 border-x">
              <form action="">
                <select className="" name="" id="">
                  <option value="English">All Ctegories</option>
                </select>
              </form>
            </div>
            <div className="flex-1 px-2   ">
              <input
                className="w-full "
                type="text"
                placeholder="search here ..."
              />
            </div>
            <div className="bg-green-200 text-black text-2xl p-1 mr-3">
              <AiOutlineSearch />
            </div>
          </div>

          <div className="flex-1 flex  ml-5 space-x-2 items-center">
            <div className="relative w-10 h-10 ">
              <AiOutlineHeart className="my-auto  w-full h-full p-1 " />
              <div className="  absolute top-0 right-0 bg-yellow-500 animate-pulse  rounded-full z-10 w-5 h-5 text-white  flex justify-center items-center ">
                3{" "}
              </div>
            </div>
            <div className="relative w-10 h-10 ">
              <TfiWrite className="my-auto  w-full h-full p-1 " />
              <div className="  absolute top-0 right-0 bg-yellow-500  rounded-full z-10 w-5 h-5 text-white  flex justify-center items-center ">
                3{" "}
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">$1500</p>
            </div>
          </div>
        </div>

        {/* third       */}

        <div className="w-full bg-gray-900   ">
          <div className=" mx-[190px] bg-gray-800 flex ">
            <div className="flex-1 h-12">
              <div class="inline-block relative w-full h-full">
                <select class="block appearance-none w-full h-full  bg-gray-800 text-white  border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="All">All</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girls</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-center h-12 ">
              <div className="centerBox w-40 h-full uppercase text-white border-gray-700 ">
                home{" "}
              </div>
              <div className="centerBox w-40 h-full uppercase text-white border-gray-700 ">
                shop{" "}
              </div>
              <div className="centerBox w-40 h-full uppercase text-white border-gray-700 ">
                {" "}
                collection
              </div>
              <div className="centerBox w-40 h-full uppercase text-white border-gray-700 ">
                {" "}
                blog
              </div>
              <div className="centerBox w-40 h-full uppercase text-white border-gray-700 ">
                {" "}
                contact
              </div>
              <div className="centerBox w-40 h-full uppercase text-white border-gray-700">
                {" "}
                pagesw
              </div>
            </div>
          </div>

          <div className=" mx-[190px] bg-gray-800 flex flex-col  text-white ">
            <div className="flex-1 h-40  flex justify-end items-center text-3xl p-5 hover:bg-gray-500 hover:text-white ">
              <p className="text-xl mr-2">MENU</p>
              <AiOutlineMenu onClick={hanleNav} />
            </div>
            <div className={nav?"  hidden  ":" flex flex-col items-start justify-center px-10 py-4 transition  ease-in duration-[8000ms]  "}>
              <div className=" menuItem ">home</div>
              <div className=" menuItem ">shop </div>
              <div className=" menuItem ">collection</div>
              <div className=" menuItem "> blog</div>
              <div className=" menuItem "> contact</div>
              <div className=" menuItem"> pages</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
