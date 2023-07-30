"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const CategoItem = ({img,item}) => {
    const [menring, setmenring] = useState(true);
    const handlemenRing = () => {
      setmenring(!menring);
    };
  return (
    <div
    className="col-span-1 relative border  "
    onMouseEnter={handlemenRing}
    onMouseLeave={handlemenRing}
  >
    <Image
      src={img}
      alt="image 1"
      className="h-full w-full "
      width="240px"
      height="240px"
    />
    <div className="absolute top-[+50%] translate-y-[-50%] left-[+50%] translate-x-[-50%] bg-white bg-opacity-50 w-32 h-24  text-2xl text-black uppercase centerBox ">
      {" "}
      {item}
    </div>
    <div
      className={
        menring
          ? "h-0"
          : "absolute top-[+50%] translate-y-[-50%] left-[+50%] translate-x-[-50%]  w-1/2 h-1/2  border broder ring-[5px] ring-red-100 transition-all ease-in-out duration-300   "
      }
    >
      {" "}
    </div>
  </div>
  )
}

export default CategoItem