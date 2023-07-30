import React from "react";
import { useState } from "react";
import Image from "next/image";

function Card({ img,type , name , price }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <div
      className="
        flex
        justify-center
        space-x-2
        text-3xl md:text-7xl 
        p-6 w-48 h-48 bg-slate-300 md:p-10 md:w-96 md:h-96 md:bg-white
        items-center
        drop-shadow-md	
        rounded-md"
    >
      <div onClick={handleClick} className="flex">
      <div className="col-span-1 flex flex-col my-auto  ">
                  <div className="flex justify-center items-center  ">
                    <Image
                      src={img}
                      alt="image 1"
                      className="bg-red-500 "
                      width="200px"
                      height="200px"
                    />
                  </div>
                  <div className=" flex flex-col justify-center items-center py-2 space-y-2 ">
                    <p className="text-xl text-gray-400 ">{type}</p>
                    <p className="text-4xl ">{name}</p>
                    <p className="text-2xl text-green-500 ">{price}</p>
                  </div>
                </div>
      </div>
    </div>
  );
}

export default Card;
