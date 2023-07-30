"use client";
import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import sale1 from "../public/sale1.jpg"
import sale2 from "../public/sale2.jpg"
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <Carousel className=" h-screen   " >
        <div className="relative h-full w-full">
          <Image
            src={sale1}
            alt="image 1"
            className="h-full w-full object-cover"
            width="240px"
            height="240px"
            
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/5">
            
          </div>
        </div>
        <div className="relative h-full w-full">
        <Image
            src={sale2}
            alt="image 1"
            className="h-full w-full object-cover"
            width="240px"
            height="240px"
            
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/5">
          
          </div>
        </div>
        
      </Carousel>
      ;
    </>
  );
};

export default Slider;
