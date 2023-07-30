"use client";
import React from "react";
import { useState } from "react";
import men from "../public/men.jpg";
import Image from "next/image";

const CatalogItem = ({ img, item }) => {
  const list = [
    {
      id: 1,
      img: men,
      type: "shoes",
      name: "reabok",
      price: "$1500",
    },
    {
        id: 2,
        img: men,
        type: "shoes",
        name: "reabok",
        price: "$1500",
      },
      {
        id: 3,
        img: men,
        type: "shoes",
        name: "reabok",
        price: "$1500",
      },
      {
        id: 4,
        img: men,
        type: "shoes",
        name: "reabok",
        price: "$1500",
      },
      {
        id: 5,
        img: men,
        type: "shoes",
        name: "reabok",
        price: "$1500",
      },
  ];
  return (
    <div className=" w-screen h-screen flex p-20 ">
      <div className=" relative w-1/4 h-full ">
        <Image
          src={img}
          alt="image 1"
          className="h-full w-full "
          width="240px"
          height="240px"
        />
        <div className="absolute top-[+50%] translate-y-[-50%] left-[+50%] translate-x-[-50%] w-96 h-24  text-7xl text-black uppercase flex justify-center">
          {" "}
          {item}
        </div>

        <button className="absolute top-[+60%] translate-y-[-50%] left-[+50%] translate-x-[-50%] underline underline-offset-1 w-64  h-24 font-bold  text-2xl text-black uppercase  ">
          {" "}
          Discover More!
        </button>
      </div>
      <div className="w-3/4 h-full  border flex flex-col items-center bg-green-400">
        <div className=" h-32 w-1/2 flex px-40 justify-between items-center">
          <button className="text-gray-400 text-3xl    active:text-black active:underline ">
            {" "}
            Cloths
          </button>
          <button className="text-gray-400 text-3xl   active:text-black active:underline ">
            Shoes
          </button>
          <button className="text-gray-400 text-3xl   active:text-black active:underline ">
            Pents
          </button>
        </div>
        <div className="grid grid-cols-3 bg-gray-900 h-full px-[80px]  ">
          {list.map((list) => {
            return (
              <>
                <div className="col-span-1 flex flex-col my-auto ">
                  <div>
                    <Image
                      src={list.img}
                      alt="image 1"
                      className="h-full w-full p-2 "
                      width="240px"
                      height="240px"
                    />
                  </div>
                  <div className="bg-red-500 flex flex-col justify-center items-center p-2 space-y-2">
                    <p className="text-xl text-gray-400 ">{list.type}</p>
                    <p className="text-4xl ">{list.name}</p>
                    <p className="text-2xl text-green-500 ">{list.price}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
